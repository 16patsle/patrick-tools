import convertBinaryToDecimal from './convertBinaryToDecimal'
import { getComplement } from './binary/getDecimalFromNegativeBinary'

const findLargestFittingPowerOfTwo = (number: number) => {
  let factor = 1
  while (factor * 2 <= number) {
    factor *= 2
  }
  return factor
}

/**
 * Convert decimal to binary number
 * @param decimalStr - The string representation of the decimal number.
 * @param twosComplement - Whether to convert negative numbers using two's complement
 * @returns The converted binary number as string, or false if failed.
 */
export default function convertDecimalToBinary(
  decimalStr: string,
  twosComplement: boolean = false
): string | false {
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
    const decimal = convertBinaryToDecimal(getComplement(digits).join(''))
    if (decimal === false) {
      return false
    }
    return convertDecimalToBinary(String(decimal + 1))
  }

  return (negative ? '-' : '') + binary
}
