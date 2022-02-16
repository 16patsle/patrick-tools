import Big, { type BigSource } from 'big.js'

/**
 * Calculate percent from growth factor
 * @param growthFactor - The growth factor
 * @returns The percent amount, or false if failed.
 */
export const calculatePercentFromGrowthFactor = (growthFactor: BigSource) => {
  if (!(growthFactor instanceof Big)) {
    try {
      growthFactor = new Big(growthFactor)
    } catch {
      return false
    }
  }
  const percentFactor = growthFactor.minus(1);
  return new Big(100).mul(percentFactor).toString()
}