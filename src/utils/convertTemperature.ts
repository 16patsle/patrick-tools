import Big, { BigSource } from 'big.js'

const celsiusOffset = 273.15
const fahrenheitOffset = 459.67

const toKelvinFactor = {
  rankine: new Big(5).div(9),
  delisle: new Big(3).div(2),
  newton: new Big(33).div(100),
  reaumur: new Big(4).div(5),
  romer: new Big(21).div(40),
}

const fromKelvinFactor = {
  rankine: new Big(9).div(5),
  delisle: new Big(2).div(3),
  newton: new Big(100).div(33),
  reaumur: new Big(5).div(4),
  romer: new Big(40).div(21),
}

const convertToKelvin = {
  kelvin: (value: Big) => value,
  celsius: (value: Big) => value.add(celsiusOffset),
  fahrenheit: (value: Big) =>
    value.add(fahrenheitOffset).mul(toKelvinFactor.rankine),
  rankine: (value: Big) => value.mul(toKelvinFactor.rankine),
  delisle: (value: Big) => new Big(373.15).sub(value).mul(toKelvinFactor.delisle),
  newton: (value: Big) => value.mul(toKelvinFactor.newton),
  reaumur: (value: Big) => value.mul(toKelvinFactor.reaumur),
  romer: (value: Big) => value.mul(toKelvinFactor.romer),
}

const convertFromKelvin = {
  kelvin: (value: Big) => value,
  celsius: (value: Big) => value.sub(celsiusOffset),
  fahrenheit: (value: Big) =>
    value.mul(fromKelvinFactor.rankine).sub(fahrenheitOffset),
  rankine: (value: Big) => value.mul(fromKelvinFactor.rankine),
  delisle: (value: Big) => new Big(373.15).sub(value.mul(fromKelvinFactor.delisle)),
  newton: (value: Big) => value.mul(fromKelvinFactor.newton),
  reaumur: (value: Big) => value.mul(fromKelvinFactor.reaumur),
  romer: (value: Big) => value.mul(fromKelvinFactor.romer),
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
) => {
  if (!(value instanceof Big)) {
    try {
      value = new Big(value)
    } catch {
      return false
    }
  }
  let result: Big
  if (from === to) {
    result = value
  }
  // Handle separately to avoid crossing boundary between Kelvin/Celsius and Rankine/Fahrenheit
  else if (from === 'fahrenheit' && to === 'rankine') {
    result = value.sub(fahrenheitOffset)
  } else if (from === 'rankine' && to === 'fahrenheit') {
    result = value.add(fahrenheitOffset)
  } else {
    const inKelvin = convertToKelvin[from](value)
    result = convertFromKelvin[to](inKelvin)
  }

  if (dp !== false) {
    result = result.round(dp, Big.roundHalfUp)
  }
  return result.toString()
}
