import { expect, test } from 'vitest'
import { calculatePercentFromGrowthFactor } from '../src/utils/calculatePercentFromGrowthFactor'

test('returns false on non-number input', () => {
  expect(calculatePercentFromGrowthFactor('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(calculatePercentFromGrowthFactor(NaN)).toBe(false)
})

test('returns correct percent for 1.3 (growth)', () => {
  expect(calculatePercentFromGrowthFactor('1.3')).toBe('30')
})

test('returns correct percent for 0.3 (decay)', () => {
  expect(calculatePercentFromGrowthFactor('0.3')).toBe('-70')
})

test('returns correct percent for 1.31914893617021276596 (growth)', () => {
  expect(calculatePercentFromGrowthFactor('1.31914893617021276596')).toBe(
    '31.914893617021276596'
  )
})

test('returns correct percent for 0.75806451612903225806 (decay)', () => {
  expect(calculatePercentFromGrowthFactor('0.75806451612903225806')).toBe(
    '-24.193548387096774194'
  )
})

test('returns correct percent for 1.31914893617021276596 (growth) rounded to 3 decimal places', () => {
  expect(calculatePercentFromGrowthFactor('1.31914893617021276596', 3)).toBe(
    '31.915'
  )
})
