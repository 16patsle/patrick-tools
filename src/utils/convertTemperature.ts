import Big, { BigSource } from 'big.js'

const kelvinToRankineFactor = new Big(9).div(5)
const rankineToKelvinFactor = new Big(5).div(9)
const celsiusOffset = 273.15
const fahrenheitOffset = 459.67

const convertToKelvin = {
  kelvin: (value: Big) => value,
  celsius: (value: Big) => value.add(celsiusOffset),
  fahrenheit: (value: Big) =>
    value.add(fahrenheitOffset).mul(rankineToKelvinFactor),
  rankine: (value: Big) => value.mul(rankineToKelvinFactor),
  delisle: (value: Big) => new Big(373.15).sub(value).mul(3 / 2),
  newton: (value: Big) => value.mul(33 / 100),
  reaumur: (value: Big) => value.mul(4 / 5),
  romer: (value: Big) => value.mul(21 / 40),
}

const convertFromKelvin = {
  kelvin: (value: Big) => value,
  celsius: (value: Big) => value.sub(celsiusOffset),
  fahrenheit: (value: Big) =>
    value.mul(kelvinToRankineFactor).sub(fahrenheitOffset),
  rankine: (value: Big) => value.mul(kelvinToRankineFactor),
  delisle: (value: Big) => new Big(373.15).sub(value.mul(2 / 3)),
  newton: (value: Big) => value.mul(100 / 33),
  reaumur: (value: Big) => value.mul(5 / 4),
  romer: (value: Big) => value.mul(40 / 21),
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
    const fromK = convertToKelvin[from](value)
    const toK = convertFromKelvin[to](fromK)
    console.error(value.toString(), fromK.toString(), toK.toString())
    result = toK
  }

  if (dp !== false) {
    result = result.round(dp, Big.roundHalfUp)
  }
  return result.toString()
}
