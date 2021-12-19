import Big, { BigSource } from 'big.js'

/**
 * Convert inches to centimeters
 * @param inch - The pound value
 * @param decimals - Number of decimals
 * @returns The inch value as centimeter, or false if failed.
 */
export default function convertInchToCentimeter(inch: BigSource, decimals = 2): string | false {
  if (!(inch instanceof Big)) {
    try {
      inch = new Big(inch)
    } catch {
      return false
    }
  }
  return new Big(inch).mul(2.54).round(decimals).toString()
}
