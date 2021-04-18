
/**
 * Convert pounds to kilograms
 * @param {number} pound - The pound value
 * @returns {number|false} The pound value as kilogram, or false if failed.
 */
export default function convertPoundToKilo(pound) {
  if(typeof pound !== 'number') {
    return false
  }
  const number = pound * 2.20462262
  return parseFloat(number.toFixed(8))
}