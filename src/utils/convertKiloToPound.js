import Big from 'big.js'

Big.DP = 5

/**
 * Convert kilograms to pounds
 * @param {Big|number|string} kilo - The kilogram value
 * @returns {string|false} The kilogram value as pound, or false if failed.
 */
export default function convertKiloToPound(kilo) {
  if (!(kilo instanceof Big)) {
    try {
      kilo = new Big(kilo)
    } catch {
      return false
    }
  }
  return new Big(kilo).mul(0.45359237).round(5).toString()
}
