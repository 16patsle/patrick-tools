import { expect, test } from 'vitest'
import convertDecimalToRoman from '../src/utils/convertDecimalToRoman'

test('handles three', () => {
  expect(convertDecimalToRoman('3')).toBe('III')
})

test('handles four', () => {
  expect(convertDecimalToRoman('4')).toBe('IV')
})

test('handles eight', () => {
  expect(convertDecimalToRoman('8')).toBe('VIII')
})

test('handles nine', () => {
  expect(convertDecimalToRoman('9')).toBe('IX')
})

test('handles ten', () => {
  expect(convertDecimalToRoman('10')).toBe('X')
})

test('properly converts 542', () => {
  expect(convertDecimalToRoman('542')).toBe('DXLII')
})

test('properly converts 1111', () => {
  expect(convertDecimalToRoman('1111')).toBe('MCXI')
})

test('properly converts 5786', () => {
  expect(convertDecimalToRoman('5786')).toBe('MMMMMDCCLXXXVI')
})

test('properly converts 11786', () => {
  expect(convertDecimalToRoman('11786')).toBe('MMMMMMMMMMMDCCLXXXVI')
})

test('returns false on NaN', () => {
  expect(convertDecimalToRoman('numb3r')).toBe(false)
})
