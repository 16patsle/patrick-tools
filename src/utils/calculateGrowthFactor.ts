import Big, { type BigSource } from 'big.js'

/**
 * Calculate the growth factor
 * @param oldValue - The old value
 * @param newValue - The new value
 * @returns THe growth factor, or false if failed.
 */
export const calculateGrowthFactor = (oldValue: BigSource, newValue: BigSource) => {
  if (!(oldValue instanceof Big)) {
    try {
      oldValue = new Big(oldValue)
    } catch {
      return false
    }
  }
  if (!(newValue instanceof Big)) {
    try {
      newValue = new Big(newValue)
    } catch {
      return false
    }
  }

  // Cannot divide by zero
  if(oldValue.eq(0)) {
    return false
  }

  return newValue.div(oldValue).toString()
}