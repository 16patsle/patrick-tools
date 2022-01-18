import convertDecimalToBinary from './convertDecimalToBinary.js'

/**
 * Convert text to ASCII binary
 * @param textStr - The string to convert.
 * @param spaces - Separate bytes with spaces.
 * @returns The converted text, or false if failed.
 */
export default function convertTextToASCIIBinary(
  textStr: string,
  spaces = true
): string | false {
  // Split string into characters
  return (
    textStr
      .split('')
      // Get char code
      .map(val => val.charCodeAt(0))
      // Remove non-ASCII chars
      .filter(val => val <= 255)
      // Convert to decimal
      .map(val => convertDecimalToBinary(String(val)))
      // If not false, pad with 0's to reach 8 bit
      .map(val => val !== false && val.padStart(8, '0'))
      // Join with spaces if enabled
      .join(spaces ? ' ' : '')
  )
}
