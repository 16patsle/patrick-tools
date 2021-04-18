
/**
 * Convert kilograms to pounds
 * @param {number} kilo - The kilogram value
 * @returns {number|false} The kilogram value as pound, or false if failed.
 */
export default function convertKiloToPound(kilo) {
  if(typeof kilo !== 'number' || Number.isNaN(kilo)) {
    return false
  }
  const number = kilo * 0.45359237
  return parseFloat(number.toFixed(8))
}