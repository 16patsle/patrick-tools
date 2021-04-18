function handleDigit(digit, map) {
  let string = ''

  if (digit < 4) {
    for (let i = 0; i < digit; i++) {
      string += map[1]
    }
  } else if (digit === 4) {
    string += map[1] + map[5]
  } else if (digit === 5) {
    string += map[5]
  } else if (digit < 9) {
    string += map[5]
    for (let i = 0; i < digit - 5; i++) {
      string += map[1]
    }
    // do recursion here?
  } else if (digit === 9) {
    string += map[1] + map[10]
  }

  return string
}

/**
 * @param {number} decimal
 */
export default function convertDecimalToRoman(decimal) {
  const map = {
    // digit value
    1: {
      // map of digit to roman
      1: 'I',
      5: 'V',
      10: 'X',
    },
    10: {
      1: 'X',
      5: 'L',
      10: 'C',
    },
    100: {
      1: 'C',
      5: 'D',
      10: 'M',
    },
  }

  let factor = 10
  let number = decimal
  let rest
  let string = ''

  for (let i = 0; i < 3; i++) {
    // First digit
    rest = number % 10
    number = Math.floor(number / 10)

    // Prepend roman numeral of the current digit
    string = handleDigit(rest, map[factor ** i]) + string
  }

  rest = number % 10

  // If any more thousands, add the required number of M's
  if (rest > 0) {
    for (let i = 0; i < rest; i++) {
      string = 'M' + string
    }
  }

  return string
}
