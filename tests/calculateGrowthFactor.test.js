import { expect, test } from 'vitest'
import { calculateGrowthFactor } from '../src/utils/calculateGrowthFactor'

test('returns false on non-number input', () => {
  expect(calculateGrowthFactor('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(calculateGrowthFactor(NaN)).toBe(false)
})

test('returns correct for new 62 old 47 (growth)', () => {
  expect(calculateGrowthFactor(47, 62)).toBe('1.31914893617021276596')
})

test('returns correct for new 47 old 62 (decay)', () => {
  expect(calculateGrowthFactor(62, 47)).toBe('0.75806451612903225806')
})
