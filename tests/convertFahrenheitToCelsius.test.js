import { expect, test } from 'vitest'
import convertFahrenheitToCelsius from '../src/utils/convertFahrenheitToCelsius'

test('returns false on non-number input', () => {
  expect(convertFahrenheitToCelsius('numb3r')).toBe( false)
})

test('returns false on NaN', () => {
  expect(convertFahrenheitToCelsius(NaN)).toBe( false)
})

test('returns correct for 0°F', () => {
  expect(convertFahrenheitToCelsius(0)).toBe( '-17.77778')
})

test('returns correct Celsius for freezing point of water', () => {
  expect(convertFahrenheitToCelsius(32)).toBe( '0')
})

test('returns correct Celsius for boiling point of water', () => {
  expect(convertFahrenheitToCelsius(212, 8)).toBe( '100')
})

test('returns correct Celsius for human body temperature', () => {
  expect(convertFahrenheitToCelsius(98.6, 8)).toBe( '37')
})

test('returns correct Celsius for absolute zero', () => {
  expect(convertFahrenheitToCelsius(-459.67, 8)).toBe( '-273.15')
})
