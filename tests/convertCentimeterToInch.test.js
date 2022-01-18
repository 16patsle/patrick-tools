import { expect, test } from 'vitest'
import convertCentimeterToInch from '../src/utils/convertCentimeterToInch'

test('returns false on non-number input', () => {
  expect(convertCentimeterToInch('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertCentimeterToInch(NaN)).toBe(false)
})

test('returns correct for 1 cm to inch', () => {
  expect(convertCentimeterToInch(1, 8)).toBe('0.39370079')
})

test('returns correct for 2 cm to inch', () => {
  expect(convertCentimeterToInch(2, 8)).toBe('0.78740157')
})

test('returns correct 1 inch for equivalent cm', () => {
  expect(convertCentimeterToInch(2.54, 8)).toBe('1')
})

test('returns correct 5 inch for equivalent cm', () => {
  expect(convertCentimeterToInch(12.7, 8)).toBe('5')
})
