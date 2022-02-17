import { expect, test } from 'vitest'
import { convertAngle } from '../src/utils/convertAngle'

test('returns false on non-number input', () => {
  expect(convertAngle('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertAngle(NaN)).toBe(false)
})

test('returns correct radians for 100°', () => {
  expect(convertAngle(100, 'degree', 'radian', 3).toString()).toBe('1.745')
})

test('returns correct degrees for 1rad', () => {
  expect(convertAngle(1, 'radian', 'degree', 3).toString()).toBe('57.296')
})

test('returns correct gradians for 100°', () => {
  expect(convertAngle(100, 'degree', 'gradian', 3).toString()).toBe('111.111')
})

test('returns correct degrees for 100grad', () => {
  expect(convertAngle(100, 'gradian', 'degree', 3).toString()).toBe('90')
})

test('returns correct turns for 100°', () => {
  expect(convertAngle(100, 'degree', 'turn', 3).toString()).toBe('0.278')
})

test('returns correct degrees for 1 turn', () => {
  expect(convertAngle(1, 'turn', 'degree', 3).toString()).toBe('360')
})

test('returns correct minutes of arc for 1°', () => {
  expect(convertAngle(1, 'degree', 'arcmin', 3).toString()).toBe('60')
})

test('returns correct degrees for 60 arcmin', () => {
  expect(convertAngle(60, 'arcmin', 'degree', 3).toString()).toBe('1')
})

test('returns correct seconds of arc for 1°', () => {
  expect(convertAngle(1, 'degree', 'arcsec', 3).toString()).toBe('3600')
})

test('returns correct degrees for 60 arcsec', () => {
  expect(convertAngle(3600, 'arcsec', 'degree', 3).toString()).toBe('1')
})
