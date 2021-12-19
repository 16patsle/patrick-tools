const getDecimal = (digits: string[]) => {
  let sum = 0
  let factor = 1

  for (let i = digits.length - 1; i >= 0; i--) {
    sum += Number(digits[i]) * factor
    factor *= 2
  }
  return sum
}

export default getDecimal