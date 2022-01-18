import { expect, test } from 'vitest'
import convertRomanToDecimal from '../src/utils/convertRomanToDecimal'

test('handles three, III', () => {
  expect(convertRomanToDecimal('III')).toBe(3)
})

test('handles four, IV', () => {
  expect(convertRomanToDecimal('IV')).toBe(4)
})

test('handles eight, VIII', () => {
  expect(convertRomanToDecimal('VIII')).toBe(8)
})

test('handles nine, IX', () => {
  expect(convertRomanToDecimal('IX')).toBe(9)
})

test('handles ten, X', () => {
  expect(convertRomanToDecimal('X')).toBe(10)
})

test('properly converts DXLII', () => {
  expect(convertRomanToDecimal('DXLII')).toBe(542)
})

test('properly converts MCXI', () => {
  expect(convertRomanToDecimal('MCXI')).toBe(1111)
})

test('properly converts MMMMMDCCLXXXVI', () => {
  expect(convertRomanToDecimal('MMMMMDCCLXXXVI')).toBe(5786)
})

test('properly converts MMMMMMMMMMMDCCLXXXVI', () => {
  expect(convertRomanToDecimal('MMMMMMMMMMMDCCLXXXVI')).toBe(11786)
})

test('returns false on invalid Roman numeral', () => {
  expect(convertRomanToDecimal('XIVA')).toBe(false)
})
