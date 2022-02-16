import Big, { type BigSource } from 'big.js'

/**
 * Calculate percent from growth factor
 * @param growthFactor - The growth factor
 * @param dp - The number of decimal places, rounding disabled by default
 * @returns The percent amount, or false if failed.
 */
export const calculatePercentFromGrowthFactor = (
  growthFactor: BigSource,
  dp: number | false = false
) => {
  if (!(growthFactor instanceof Big)) {
    try {
      growthFactor = new Big(growthFactor)
    } catch {
      return false
    }
  }
  const percentFactor = growthFactor.minus(1)
  const percent = new Big(100).mul(percentFactor)
  if (dp !== false) {
    return percent.round(dp, Big.roundHalfUp).toString()
  } else {
    return percent.toString()
  }
}
