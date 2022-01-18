import { expect, test } from 'vitest'
import convertCelsiusToFahrenheit from '../src/utils/convertCelsiusToFahrenheit'

test('returns false on non-number input', () => {
  expect(convertCelsiusToFahrenheit('numb3r')).toBe( false)
})

test('returns false on NaN', () => {
  expect(convertCelsiusToFahrenheit(NaN)).toBe( false)
})

test('returns correct for equivalent of 0°F', () => {
  expect(convertCelsiusToFahrenheit('-17.77778')).toBe( '0')
})

test('returns correct Fahrenheit for freezing point of water', () => {
  expect(convertCelsiusToFahrenheit(0)).toBe( '32')
})

test('returns correct Fahrenheit for boiling point of water', () => {
  expect(convertCelsiusToFahrenheit(100, 8)).toBe( '212')
})

test('returns correct Fahrenheit for human body temperature', () => {
  expect(convertCelsiusToFahrenheit(37, 8)).toBe( '98.6')
})

test('returns correct Fahrenheit for absolute zero', () => {
  expect(convertCelsiusToFahrenheit(-273.15, 8)).toBe( '-459.67')
})
