import getDecimal from './getDecimal.js'

/**
 * @param {string[]} digits
 */
export const getComplement = digits => digits.map(val => (val == '1' ? '0' : '1'))

/**
 * @param {string[]} digits
 */
const getDecimalFromNegativeBinary = digits => {
  const sign = digits.shift()
  const k = getComplement(digits)
  if (sign === '1') {
    return -(getDecimal(k) + 1)
  } else {
    return false
  }
}

export default getDecimalFromNegativeBinary