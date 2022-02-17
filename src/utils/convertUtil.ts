import Big, { BigSource } from 'big.js'

/**
 * Convert a measurement from one unit to another
 * @param value - The original value
 * @param from - The original unit
 * @param to - The target unit
 * @param dp - The number of decimal places, rounding disabled by default
 * @param convertToIntermediate - Functions to convert to intermediate unit
 * @param convertFromIntermediate - Functions to convert from intermediate unit
 * @returns The converted value, or false if failed.
 */
export const convertUtil = <T extends string>(
  value: BigSource,
  from: T,
  to: T,
  dp: number | false = false,
  convertToIntermediate: { [key in T]: (value: Big) => Big },
  convertFromIntermediate: { [key in T]: (value: Big) => Big },
  processCallback?: (value: Big, from: T, to: T) => Big | false | undefined
) => {
  if (!(value instanceof Big)) {
    try {
      value = new Big(value)
    } catch {
      return false
    }
  }
  let result: Big
  if (from === to) {
    result = value
  } else {
    // Option for callback for alternative handling
    if (processCallback) {
      let processed = processCallback(value, from, to)
      if (processed === false) {
        // Callback indicated failure
        return false
      } else if (typeof processed !== 'undefined') {
        // Callback returned a value we can use
        result = processed
      }
    }
    const intermediate = convertToIntermediate[from](value)
    result = convertFromIntermediate[to](intermediate)
  }

  if (dp !== false) {
    result = result.round(dp, Big.roundHalfUp)
  }
  return result
}
