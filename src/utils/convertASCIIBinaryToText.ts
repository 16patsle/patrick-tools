import chunk from 'lodash.chunk'
import convertBinaryToDecimal from './convertBinaryToDecimal.js'

/**
 * Convert ASCII binary to text
 * @param binaryStr - The string representation of the binary text.
 * @returns The converted text, or false if failed.
 */
export default function convertASCIIBinaryToText(binaryStr: string): string | false {
  // Remove spaces
  binaryStr = binaryStr.replace(/ /g, '')

  // Check that the binary string is valid
  if (!/^[-01]+$/.test(binaryStr)) {
    return false
  }

  // Split array into bytes
  return chunk(binaryStr.split(''), 8)
    // Remove incomplete bytes
    .filter(val => val.length === 8)
    // Join each byte to a string and convert to decimal
    .map(val => convertBinaryToDecimal(val.join('')))
    // If not false, get char equivalent
    .map(val => val !== false && String.fromCharCode(val))
    .join('')
}
