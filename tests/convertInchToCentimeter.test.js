import { expect, test } from 'vitest'
import convertInchToCentimeter from '../src/utils/convertInchToCentimeter'

test('returns false on non-number input', () => {
  expect(convertInchToCentimeter('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertInchToCentimeter(NaN)).toBe(false)
})

test('returns correct 1 cm for equivalent inch', () => {
  expect(convertInchToCentimeter(0.39370079)).toBe('1')
})

test('returns correct 2 cm for equivalent inch', () => {
  expect(convertInchToCentimeter(0.78740157)).toBe('2')
})

test('returns correct for 1 inch to cm', () => {
  expect(convertInchToCentimeter(1)).toBe('2.54')
})

test('returns correct for 5 inch to cm', () => {
  expect(convertInchToCentimeter(5)).toBe('12.7')
})
