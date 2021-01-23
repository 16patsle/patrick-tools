import chunk from 'lodash.chunk'
import convertBinaryToDecimal from './convertBinaryToDecimal.js'

/**
 * Convert ASCII binary to text
 * @param {string} binaryStr - The string representation of the binary text.
 * @returns {string|false} The converted text, or false if failed.
 */
export default function convertASCIIBinaryToText(binaryStr) {
  // Remove spaces
  binaryStr = binaryStr.replace(/ /g, '')

  // Check that the binary string is valid
  if (!/^[-01]+$/.test(binaryStr) || binaryStr.length % 8 !== 0) {
    return false
  }

  // Split array into bytes
  return chunk(binaryStr.split(''), 8)
    // Join each byte to a string and convert to decimal
    .map(val => convertBinaryToDecimal(val.join('')))
    // If not false, get char equivalent
    .map(val => val !== false && String.fromCharCode(val))
    .join('')
}
