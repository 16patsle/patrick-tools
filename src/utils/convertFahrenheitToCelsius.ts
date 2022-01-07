import Big, { type BigSource } from 'big.js'

const offset = 32
const factor = new Big(5).div(9)

/**
 * Convert fahrenheit to celsius
 * @param fahrenheit - The fahrenheit value
 * @param decimals - Number of decimals
 * @returns The fahrenheit value as celsius, or false if failed.
 */
export default function convertFahrenheitToCelsius(fahrenheit: BigSource, decimals = 5) {
  if (!(fahrenheit instanceof Big)) {
    try {
      fahrenheit = new Big(fahrenheit)
    } catch {
      return false
    }
  }
  return new Big(fahrenheit).sub(offset).mul(factor).round(decimals).toString()
}
