import Big, { BigSource } from 'big.js'
import { siPrefixFactors } from '../data/siPrefixFactors'
import { convertUtil } from './convertUtil'

const angstromFactor = 1e-10
const inchFactor = new Big(2.54).div(100)
const footFactor = inchFactor.mul(12)
const yardFactor = footFactor.mul(3)
const fathomFactor = footFactor.mul(6)
const chainFactor = yardFactor.mul(22)
const rodFactor = chainFactor.div(4)
const linkFactor = chainFactor.div(100)
const furlongFactor = chainFactor.mul(10)
const mileFactor = furlongFactor.mul(8)
const nauticalMileFactor = 1.852

const lightSecondFactor = new Big(299_792_458)
const lightMinuteFactor = lightSecondFactor.mul(60)
const lightHourFactor = lightMinuteFactor.mul(60)
const lightDayFactor = lightHourFactor.mul(24)
const lightWeekFactor = lightDayFactor.mul(7)
const lightYearFactor = lightDayFactor.mul(365.25)
const astronomicalUnitFactor = new Big(1.495_978_707e11)
const parsecFactor = astronomicalUnitFactor.mul(206_000)

/**
 * Functions for converting a length value from the specified unit to meters.
 */
const convertToMeter = {
  picometer: (value: Big) => value.mul(siPrefixFactors.pico),
  angstrom: (value: Big) => value.mul(angstromFactor),
  nanometer: (value: Big) => value.mul(siPrefixFactors.nano),
  micrometer: (value: Big) => value.mul(siPrefixFactors.micro),
  millimeter: (value: Big) => value.mul(siPrefixFactors.milli),
  centimeter: (value: Big) => value.mul(siPrefixFactors.centi),
  meter: (value: Big) => value,
  kilometer: (value: Big) => value.mul(siPrefixFactors.kilo),
  gigameter: (value: Big) => value.mul(siPrefixFactors.giga),
  inch: (value: Big) => value.mul(inchFactor),
  foot: (value: Big) => value.mul(footFactor),
  yard: (value: Big) => value.mul(yardFactor),
  fathom: (value: Big) => value.mul(fathomFactor),
  chain: (value: Big) => value.mul(chainFactor),
  rod: (value: Big) => value.mul(rodFactor),
  link: (value: Big) => value.mul(linkFactor),
  furlong: (value: Big) => value.mul(furlongFactor),
  mile: (value: Big) => value.mul(mileFactor),
  nauticalMile: (value: Big) => value.mul(nauticalMileFactor),
  lightSecond: (value: Big) => value.mul(lightSecondFactor),
  lightMinute: (value: Big) => value.mul(lightMinuteFactor),
  lightHour: (value: Big) => value.mul(lightHourFactor),
  lightDay: (value: Big) => value.mul(lightDayFactor),
  lightWeek: (value: Big) => value.mul(lightWeekFactor),
  lightYear: (value: Big) => value.mul(lightYearFactor),
  astronomicalUnit: (value: Big) => value.mul(astronomicalUnitFactor),
  parsec: (value: Big) => value.mul(parsecFactor),
  kiloParsec: (value: Big) => value.mul(parsecFactor).mul(siPrefixFactors.kilo),
  megaParsec: (value: Big) => value.mul(parsecFactor).mul(siPrefixFactors.mega),
  gigaParsec: (value: Big) => value.mul(parsecFactor).mul(siPrefixFactors.giga),
}

/**
 * Functions for converting a length value from meters to a specified unit.
 */
const convertFromMeter = {
  picometer: (value: Big) => value.div(siPrefixFactors.pico),
  angstrom: (value: Big) => value.div(angstromFactor),
  nanometer: (value: Big) => value.div(siPrefixFactors.nano),
  micrometer: (value: Big) => value.div(siPrefixFactors.micro),
  millimeter: (value: Big) => value.div(siPrefixFactors.milli),
  centimeter: (value: Big) => value.div(siPrefixFactors.centi),
  meter: (value: Big) => value,
  kilometer: (value: Big) => value.div(siPrefixFactors.kilo),
  gigameter: (value: Big) => value.div(siPrefixFactors.giga),
  inch: (value: Big) => value.div(inchFactor),
  foot: (value: Big) => value.div(footFactor),
  yard: (value: Big) => value.div(yardFactor),
  fathom: (value: Big) => value.div(fathomFactor),
  chain: (value: Big) => value.div(chainFactor),
  rod: (value: Big) => value.div(rodFactor),
  link: (value: Big) => value.div(linkFactor),
  furlong: (value: Big) => value.div(furlongFactor),
  mile: (value: Big) => value.div(mileFactor),
  nauticalMile: (value: Big) => value.div(nauticalMileFactor),
  lightSecond: (value: Big) => value.div(lightSecondFactor),
  lightMinute: (value: Big) => value.div(lightMinuteFactor),
  lightHour: (value: Big) => value.div(lightHourFactor),
  lightDay: (value: Big) => value.div(lightDayFactor),
  lightWeek: (value: Big) => value.div(lightWeekFactor),
  lightYear: (value: Big) => value.div(lightYearFactor),
  astronomicalUnit: (value: Big) => value.div(astronomicalUnitFactor),
  parsec: (value: Big) => value.div(parsecFactor),
  kiloParsec: (value: Big) => value.div(parsecFactor).div(siPrefixFactors.kilo),
  megaParsec: (value: Big) => value.div(parsecFactor).div(siPrefixFactors.mega),
  gigaParsec: (value: Big) => value.div(parsecFactor).div(siPrefixFactors.giga),
}

type LengthUnit = keyof typeof convertToMeter & keyof typeof convertFromMeter

/**
 * Convert length from one unit to another
 * @param value - The original value
 * @param from - The original unit
 * @param to - The target unit
 * @param dp - The number of decimal places, rounding disabled by default
 * @returns The converted value, or false if failed.
 */
export const convertLength = (
  value: BigSource,
  from: LengthUnit,
  to: LengthUnit,
  dp: number | false = false
) => convertUtil(value, from, to, dp, convertToMeter, convertFromMeter)
