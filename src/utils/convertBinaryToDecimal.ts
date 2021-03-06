import getDecimalFromNegativeBinary from './binary/getDecimalFromNegativeBinary.js'
import getDecimal from './binary/getDecimal.js'

/**
 * Convert binary to decimal number
 * @param binaryStr - The string representation of the binary number.
 * @param twosComplement - Whether to treat the first bit as a sign and use two's complement.
 * @returns The converted number, or false if failed.
 */
export default function convertBinaryToDecimal(
  binaryStr: string,
  twosComplement: boolean = false
): number | false {
  if (
    (twosComplement && binaryStr.includes('-')) ||
    !/^[-01]+$/.test(binaryStr)
  ) {
    return false
  }

  const digits = binaryStr.split('')

  let negative = false
  if (digits[0] === '-') {
    negative = true
    digits.shift()
  }

  if (twosComplement) {
    const negative = getDecimalFromNegativeBinary(digits)
    if (negative !== false) {
      return negative
    }
  }

  return (negative ? -1 : 1) * getDecimal(digits)
}
