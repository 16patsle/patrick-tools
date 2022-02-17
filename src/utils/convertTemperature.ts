import Big, { BigSource } from 'big.js'
import { convertUtil } from './convertUtil'

const celsiusOffset = 273.15
const fahrenheitOffset = 459.67
const delisleOffset = celsiusOffset + 100
const romerOffset = 7.5

const factor = {
  rankine: new Big(5).div(9),
  delisle: new Big(2).div(3),
  newton: new Big(100).div(33),
  reaumur: new Big(5).div(4),
  romer: new Big(40).div(21),
}

/**
 * Functions for converting a temperature value from the specified unit to Kelvin.
 */
const convertToKelvin = {
  kelvin: (value: Big) => value,
  celsius: (value: Big) => value.add(celsiusOffset),
  fahrenheit: (value: Big) => value.add(fahrenheitOffset).mul(factor.rankine),
  rankine: (value: Big) => value.mul(factor.rankine),
  delisle: (value: Big) =>
    new Big(delisleOffset).sub(value.mul(factor.delisle)),
  newton: (value: Big) => value.mul(factor.newton).add(celsiusOffset),
  reaumur: (value: Big) => value.mul(factor.reaumur).add(celsiusOffset),
  romer: (value: Big) =>
    value.sub(romerOffset).mul(factor.romer).add(celsiusOffset),
}

/**
 * Functions for converting a temperature value from Kelvin to a specified unit.
 */
const convertFromKelvin = {
  kelvin: (value: Big) => value,
  celsius: (value: Big) => value.sub(celsiusOffset),
  fahrenheit: (value: Big) => value.div(factor.rankine).sub(fahrenheitOffset),
  rankine: (value: Big) => value.div(factor.rankine),
  delisle: (value: Big) =>
    new Big(delisleOffset).sub(value).div(factor.delisle),
  newton: (value: Big) => value.sub(celsiusOffset).div(factor.newton),
  reaumur: (value: Big) => value.sub(celsiusOffset).div(factor.reaumur),
  romer: (value: Big) =>
    value.sub(celsiusOffset).div(factor.romer).add(romerOffset),
}

type TemperatureUnit = keyof typeof convertToKelvin &
  keyof typeof convertFromKelvin

/**
 * Convert temperature from one unit to another
 * @param value - The original value
 * @param from - The original unit
 * @param to - The target unit
 * @param dp - The number of decimal places, rounding disabled by default
 * @returns The converted value, or false if failed.
 */
export const convertTemperature = (
  value: BigSource,
  from: TemperatureUnit,
  to: TemperatureUnit,
  dp: number | false = false
) =>
  convertUtil(
    value,
    from,
    to,
    dp,
    convertToKelvin,
    convertFromKelvin,
    (value, from, to) => {
      if (from === 'fahrenheit' && to === 'rankine') {
        return value.add(fahrenheitOffset)
      } else if (from === 'rankine' && to === 'fahrenheit') {
        return value.sub(fahrenheitOffset)
      }
    }
  )
