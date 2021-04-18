import Big from 'big.js'

Big.DP = 5

/**
 * Convert pounds to kilograms
 * @param {Big|number|string} pound - The pound value
 * @returns {string|false} The pound value as kilogram, or false if failed.
 */
export default function convertPoundToKilo(pound) {
  if (!(pound instanceof Big)) {
    try {
      pound = new Big(pound)
    } catch {
      return false
    }
  }
  return new Big(pound).mul(2.20462262).round(5).toString()
}
