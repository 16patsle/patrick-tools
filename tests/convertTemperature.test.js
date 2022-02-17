import { describe, expect, test } from 'vitest'
import { convertTemperature } from '../src/utils/convertTemperature'

test('returns false on non-number input', () => {
  expect(convertTemperature('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertTemperature(NaN)).toBe(false)
})

describe('correctly converts from Celsius to Kelvin', () => {
  test('returns correct Kelvin for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'kelvin')).toBe('273.15')
  })

  test('returns correct Kelvin for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'kelvin')).toBe('373.15')
  })

  test('returns correct Kelvin for human body temperature in Celsius', () => {
    expect(convertTemperature(37, 'celsius', 'kelvin')).toBe('310.15')
  })

  test('returns correct Kelvin for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'kelvin')).toBe('0')
  })
})

describe('correctly converts from Celsius to Fahrenheit', () => {
  test('returns correct Fahrenheit for Celsius equivalent of 0°F', () => {
    expect(convertTemperature('-17.77778', 'celsius', 'fahrenheit', 5)).toBe('0')
  })

  test('returns correct Fahrenheit for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'fahrenheit')).toBe('32')
  })

  test('returns correct Fahrenheit for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'fahrenheit')).toBe('212')
  })

  test('returns correct Fahrenheit for human body temperature in Celsius', () => {
    expect(convertTemperature(37, 'celsius', 'fahrenheit')).toBe('98.6')
  })

  test('returns correct Fahrenheit for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'fahrenheit')).toBe('-459.67')
  })
})
