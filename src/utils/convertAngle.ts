import Big, { BigSource } from 'big.js'

const gradianFactor = new Big(9).div(10)
const turnFactor = 360
const arcminFactor = new Big(1).div(60)
const arcsecFactor = arcminFactor.div(60)

/**
 * Functions for converting an angle value from the specified unit to degrees.
 */
const convertToDegrees = {
  degree: (value: Big) => value,
  radian: (value: Big) => value.mul(new Big(180).div(Math.PI)),
  gradian: (value: Big) => value.mul(gradianFactor),
  turn: (value: Big) => value.mul(turnFactor),
  arcmin: (value: Big) => value.mul(arcminFactor),
  arcsec: (value: Big) => value.mul(arcsecFactor),
}

/**
 * Functions for converting an angle value from degrees to a specified unit.
 */
const convertFromDegrees = {
  degree: (value: Big) => value,
  radian: (value: Big) => value.mul(new Big(Math.PI).div(180)),
  gradian: (value: Big) => value.div(gradianFactor),
  turn: (value: Big) => value.div(turnFactor),
  arcmin: (value: Big) => value.div(arcminFactor),
  arcsec: (value: Big) => value.div(arcsecFactor),
}

type AngleUnit = keyof typeof convertToDegrees & keyof typeof convertFromDegrees

/**
 * Convert angle from one unit to another
 * @param value - The original value
 * @param from - The original unit
 * @param to - The target unit
 * @param dp - The number of decimal places, rounding disabled by default
 * @returns The converted value, or false if failed.
 */
export const convertAngle = (
  value: BigSource,
  from: AngleUnit,
  to: AngleUnit,
  dp: number | false = false
) => {
  if (!(value instanceof Big)) {
    try {
      value = new Big(value)
    } catch {
      return false
    }
  }
  let result: Big
  if (from === to) {
    result = value
  }
  const inDegrees = convertToDegrees[from](value)
  result = convertFromDegrees[to](inDegrees)

  if (dp !== false) {
    result = result.round(dp, Big.roundHalfUp)
  }
  return result
}
