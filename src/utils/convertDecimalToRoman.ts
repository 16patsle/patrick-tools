function handleDigit(digit: number, map: { 1: string; 5: string; 10: string }) {
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
 * Convert decimal to Roman numeral
 * @param decimalStr - The string representation of the decimal number.
 * @returns The converted Roman numeral as string, or false if failed.
 */
export default function convertDecimalToRoman(
  decimalStr: string
): string | false {
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
  let number = parseInt(decimalStr, 10)
  let rest: number
  let string = ''

  if (Number.isNaN(number)) {
    return false
  }

  for (let i = 0; i < 3; i++) {
    // First digit
    rest = number % 10
    number = Math.floor(number / 10)

    // Prepend roman numeral of the current digit
    string = handleDigit(rest, map[factor ** i]) + string
  }

  // If any more thousands, add the required number of M's
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      string = 'M' + string
    }
  }

  return string
}
