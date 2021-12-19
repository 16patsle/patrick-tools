import Big from 'big.js'

/**
 * Convert kilograms to pounds
 * @param {Big|number|string} kilo - The kilogram value
 * @param {number} [decimals=5] - Number of decimals
 * @returns {string|false} The kilogram value as pound, or false if failed.
 */
export default function convertKiloToPound(kilo, decimals = 5) {
  if (!(kilo instanceof Big)) {
    try {
      kilo = new Big(kilo)
    } catch {
      return false
    }
  }
  return new Big(kilo).mul(0.45359237).round(decimals).toString()
}
