import { expect, test } from 'vitest'
import convertPoundToKilo from '../src/utils/convertPoundToKilo'

test('returns false on non-number input', () => {
  expect(convertPoundToKilo('numb3r')).toBe( false)
})

test('returns false on NaN', () => {
  expect(convertPoundToKilo(NaN)).toBe( false)
})

test('returns correct 1 kg for equivalent pound (avoirdupois)', () => {
  expect(convertPoundToKilo(0.45359237, 8)).toBe( '1')
})

test('returns correct 2 kg for equivalent pound (avoirdupois)', () => {
  expect(convertPoundToKilo(0.90718474, 8)).toBe( '2')
})

test('returns correct for 1 lb (avoirdupois) to kg', () => {
  expect(convertPoundToKilo(1, 8)).toBe( '2.20462262')
})
