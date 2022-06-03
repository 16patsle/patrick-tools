import type { Big, BigSource } from 'big.js'
import { expect, test } from 'vitest'

/**
 * Generate tests for unit conversions.
 * @param f - The conversion function
 * @param from - The original unit
 * @param to - The target unit
 * @param values - Array of values to test and expected result
 * @param dp - The number of decimal places, rounding disabled by default
 */
export const generateTests = <T extends string>(
  f: (value: BigSource, from: T, to: T, dp?: number | false) => false | Big,
  from: T,
  to: T,
  values: string[][],
  dp: number
) => {
  values.forEach(([fromValue, toValue]) => {
    test(`returns correct for ${fromValue} ${from} to ${to}`, () => {
      const result = f(fromValue, from, to, dp)
      expect(result.toString()).toBe(toValue)
    })
  })
}
