/**
 * Convert Roman numerals to decimal
 * @param romanStr - The string representation of the Roman numeral.
 * @returns The converted decimal number, or false if failed.
 */
export default function convertRomanToDecimal(
  romanStr: string
): number | false {
  if (!/^[IVXLCDM]+$/.test(romanStr)) {
    return false
  }

  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  type RomanNumberElement = keyof typeof map

  // split array, convert to numbers, reverse to start at right end
  const arr = romanStr
    .split('')
    .map(val => map[val as RomanNumberElement])
    .reverse()

  let lastNumber = 0
  let number = 0

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]

    if (lastNumber > 0 && current < lastNumber) {
      // If smaller than last number, subtract (e.g. IV or IX)
      number -= current
    } else {
      // Else add (e.g. III, XI, CV or anything else)
      number += current
    }

    lastNumber = current
  }

  return number
}
