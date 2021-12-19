import Big, { type BigSource } from 'big.js'

/**
 * Convert pounds to kilograms
 * @param pound - The pound value
 * @param decimals - Number of decimals
 * @returns The pound value as kilogram, or false if failed.
 */
export default function convertPoundToKilo(pound: BigSource, decimals = 5) {
  if (!(pound instanceof Big)) {
    try {
      pound = new Big(pound)
    } catch {
      return false
    }
  }
  return new Big(pound).mul(2.20462262).round(decimals).toString()
}
