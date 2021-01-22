import getDecimalFromNegativeBinary from "./getDecimalFromNegativeBinary.mjs"
import getDecimal from './getDecimal.mjs'

/**
 * Convert binary to decimal number
 * @param {string} binaryStr - The string representation of the binary number.
 * @param {boolean} twosComplement - Whether to treat the first bit as a sign and use two's complement.
 */
export default function convertBinaryToDecimal(
  binaryStr,
  twosComplement = false
) {
  if (!/^[01]+$/.test(binaryStr)) {
    return false
  }

  const digits = binaryStr.split('')

  if (twosComplement) {
    const negative = getDecimalFromNegativeBinary(digits)
    if (negative !== false) {
      return negative
    }
  }

  return getDecimal(digits)
}
