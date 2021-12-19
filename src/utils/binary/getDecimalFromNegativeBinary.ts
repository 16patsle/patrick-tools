import getDecimal from './getDecimal'

export const getComplement = (digits: string[]) => digits.map(val => (val == '1' ? '0' : '1'))

const getDecimalFromNegativeBinary = (digits: string[]) => {
  const sign = digits.shift()
  const k = getComplement(digits)
  if (sign === '1') {
    return -(getDecimal(k) + 1)
  } else {
    return false
  }
}

export default getDecimalFromNegativeBinary