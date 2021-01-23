import convertBinaryToDecimal from './convertBinaryToDecimal.js'
import { getComplement } from './getDecimalFromNegativeBinary.js'

const findLargestFittingPowerOfTwo = number => {
  let factor = 1
  while (factor * 2 <= number) {
    factor *= 2
  }
  return factor
}

/**
 * Convert decimal to binary number
 * @param {string} decimalStr - The string representation of the decimal number.
 * @param {boolean} twosComplement - Whether to convert negative numbers using two's complement
 */
export default function convertDecimalToBinary(
  decimalStr,
  twosComplement = false
) {
  if (!/^[-0-9]+$/.test(decimalStr)) {
    return false
  }

  let number = parseInt(decimalStr, 10)
  let binary = ''
  let negative = false

  if (twosComplement) {
    binary += '0'
  }

  if (number < 0) {
    negative = true
    number = Math.abs(number)
  }

  let factor = findLargestFittingPowerOfTwo(number)

  while (factor >= 1) {
    if (factor <= number) {
      binary += '1'
      number -= factor
    } else {
      binary += '0'
    }
    factor /= 2
  }

  if (twosComplement && negative) {
    const digits = binary.split('')
    return convertDecimalToBinary(
      convertBinaryToDecimal(getComplement(digits).join('')) + 1
    )
  }

  return (negative ? '-' : '') + binary
}
