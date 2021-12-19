import Big from 'big.js'

/**
 * Convert centimeters to inches
 * @param {Big|number|string} cm - The centimeter value
 * @param {number} [decimals=5] - Number of decimals
 * @returns {string|false} The centimeter value as inch, or false if failed.
 */
export default function convertKiloToPound(cm, decimals = 5) {
  if (!(cm instanceof Big)) {
    try {
      cm = new Big(cm)
    } catch {
      return false
    }
  }
  return new Big(cm).mul(0.3937007874).round(decimals).toString()
}
