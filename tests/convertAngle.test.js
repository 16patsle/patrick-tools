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
