import { expect, test } from 'vitest'
import convertKiloToPound from '../src/utils/convertKiloToPound'

test('returns false on non-number input', () => {
  expect(convertKiloToPound('numb3r')).toBe( false)
})

test('returns false on NaN', () => {
  expect(convertKiloToPound(NaN)).toBe( false)
})

test('returns correct for 1 kg to pound (avoirdupois)', () => {
  expect(convertKiloToPound(1, 8)).toBe( '0.45359237')
})

test('returns correct for 2 kg to pound (avoirdupois)', () => {
  expect(convertKiloToPound(2, 8)).toBe( '0.90718474')
})

test('returns correct 1 lb (avoirdupois) for equivalent kg', () => {
  expect(convertKiloToPound(2.20462262, 8)).toBe( '1')
})
