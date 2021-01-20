/**
 * @param {string[]} digits
 */
const getDecimal = digits => {
  let sum = 0
  let factor = 1

  for (let i = digits.length - 1; i >= 0; i--) {
    sum += Number(digits[i]) * factor
    factor *= 2
  }
  return sum
}

/**
 * @param {string[]} digits
 */
const getComplement = digits => digits.map(val => (val == '1' ? '0' : '1'))

/**
 * Convert binary to decimal number
 * @param {string} binaryStr - The string representation of the binary number.
 * @param {boolean} twosComplement - Whether to treat the first bit as a sign and use two's complement.
 */
export default function convertBinartToDecimal(
  binaryStr,
  twosComplement = false
) {
  if (!/^[01]+$/.test(binaryStr)) {
    return false
  }

  const digits = binaryStr.split('')

  if (twosComplement) {
    const sign = digits.shift()
    const k = getComplement(digits)
    if (sign === '1') {
      return -(getDecimal(k) + 1)
    }
  }

  return getDecimal(digits)
}
