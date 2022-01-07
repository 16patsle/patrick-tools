import Big, { type BigSource } from 'big.js'

/**
 * Convert kilograms to pounds
 * @param kilo - The kilogram value
 * @param decimals - Number of decimals
 * @returns The kilogram value as pound, or false if failed.
 */
export default function convertKiloToPound(kilo: BigSource, decimals = 5) {
  if (!(kilo instanceof Big)) {
    try {
      kilo = new Big(kilo)
    } catch {
      return false
    }
  }
  return new Big(kilo).mul(0.45359237).round(decimals).toString()
}
