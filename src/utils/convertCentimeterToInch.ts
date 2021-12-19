import Big, { type BigSource } from 'big.js'

/**
 * Convert centimeters to inches
 * @param cm - The centimeter value
 * @param decimals - Number of decimals
 * @returns The centimeter value as inch, or false if failed.
 */
export default function convertKiloToPound(cm: BigSource, decimals: number = 5): string | false {
  if (!(cm instanceof Big)) {
    try {
      cm = new Big(cm)
    } catch {
      return false
    }
  }
  return new Big(cm).mul(0.3937007874).round(decimals).toString()
}
