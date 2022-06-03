import Big, { BigSource } from 'big.js'
import { convertUtil } from './convertUtil'

const milligramFactor = 1e-6
const gramFactor = 1e-3
const tonneFactor = 1e3
const poundFactor = new Big(0.45359237)
const ounceFactor = poundFactor.div(16)
const tonUSFactor = poundFactor.mul(2000)
const tonUKFactor = poundFactor.mul(2240)

/**
 * Functions for converting a weight value from the specified unit to kilogram.
 */
const convertToKilogram = {
  milligram: (value: Big) => value.mul(milligramFactor),
  gram: (value: Big) => value.mul(gramFactor),
  kilogram: (value: Big) => value,
  tonne: (value: Big) => value.mul(tonneFactor),
  pound: (value: Big) => value.mul(poundFactor),
  ounce: (value: Big) => value.mul(ounceFactor),
  tonUS: (value: Big) => value.mul(tonUSFactor),
  tonUK: (value: Big) => value.mul(tonUKFactor),
}

/**
 * Functions for converting a weight value from kilogram to the specified unit.
 */
const convertFromKilogram = {
  milligram: (value: Big) => value.div(milligramFactor),
  gram: (value: Big) => value.div(gramFactor),
  kilogram: (value: Big) => value,
  tonne: (value: Big) => value.div(tonneFactor),
  pound: (value: Big) => value.div(poundFactor),
  ounce: (value: Big) => value.div(ounceFactor),
  tonUS: (value: Big) => value.div(tonUSFactor),
  tonUK: (value: Big) => value.div(tonUKFactor),
}

type WeightUnit = keyof typeof convertToKilogram &
  keyof typeof convertFromKilogram

/**
 * Convert weight from one unit to another
 * @param value - The original value
 * @param from - The original unit
 * @param to - The target unit
 * @param dp - The number of decimal places, rounding disabled by default
 * @returns The converted value, or false if failed.
 */
export const convertWeight = (
  value: BigSource,
  from: WeightUnit,
  to: WeightUnit,
  dp: number | false = false
) => convertUtil(value, from, to, dp, convertToKilogram, convertFromKilogram)
