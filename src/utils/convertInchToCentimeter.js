import Big from 'big.js'

/**
 * Convert inches to centimeters
 * @param {Big|number|string} inch - The pound value
 * @param {number} [decimals=2] - Number of decimals
 * @returns {string|false} The inch value as centimeter, or false if failed.
 */
export default function convertInchToCentimeter(inch, decimals = 2) {
  if (!(inch instanceof Big)) {
    try {
      inch = new Big(inch)
    } catch {
      return false
    }
  }
  return new Big(inch).mul(2.54).round(decimals).toString()
}
