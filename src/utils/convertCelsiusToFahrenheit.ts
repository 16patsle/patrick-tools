import Big, { type BigSource } from 'big.js'

const offset = 32
const factor = new Big(9).div(5)

/**
 * Convert celsius to fahrenheit
 * @param celsius - The celsius value
 * @param decimals - Number of decimals
 * @returns The celsius value as fahrenheit, or false if failed.
 */
export default function convertCelsiusToFahrenheit(celsius: BigSource, decimals = 5) {
  if (!(celsius instanceof Big)) {
    try {
      celsius = new Big(celsius)
    } catch {
      return false
    }
  }
  return new Big(celsius).mul(factor).add(offset).round(decimals).toString()
}
