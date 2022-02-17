import { describe, expect, test } from 'vitest'
import { convertTemperature } from '../src/utils/convertTemperature'

test('returns false on non-number input', () => {
  expect(convertTemperature('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertTemperature(NaN)).toBe(false)
})

describe('correctly converts from Celsius to Kelvin', () => {
  test('returns correct Kelvin for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'kelvin')).toBe('773.15')
  })

  test('returns correct Kelvin for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'kelvin')).toBe('373.15')
  })

  test('returns correct Kelvin for human body temperature in Celsius', () => {
    expect(convertTemperature(37, 'celsius', 'kelvin')).toBe('310.15')
  })

  test('returns correct Kelvin for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'kelvin')).toBe('273.15')
  })

  test('returns correct Kelvin for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'kelvin')).toBe('0')
  })
})

describe('correctly converts from Celsius to Fahrenheit', () => {
  test('returns correct Fahrenheit for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'fahrenheit')).toBe('932')
  })

  test('returns correct Fahrenheit for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'fahrenheit')).toBe('212')
  })  

  test('returns correct Fahrenheit for human body temperature in Celsius', () => {
    expect(convertTemperature(37, 'celsius', 'fahrenheit')).toBe('98.6')
  })

  test('returns correct Fahrenheit for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'fahrenheit')).toBe('32')
  })

  test('returns correct Fahrenheit for Celsius equivalent of 0°F', () => {
    expect(convertTemperature('-17.77778', 'celsius', 'fahrenheit', 5)).toBe('0')
  })

  test('returns correct Fahrenheit for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'fahrenheit')).toBe('-459.67')
  })
})

describe('correctly converts from Celsius to Rankine', () => {
  test('returns correct Rankine for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'rankine')).toBe('1391.67')
  })

  test('returns correct Rankine for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'rankine')).toBe('671.67')
  })

  test('returns correct Rankine for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'rankine')).toBe('491.67')
  })

  test('returns correct Rankine for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'rankine')).toBe('0')
  })
})

describe('correctly converts from Celsius to Delisle', () => {
  test('returns correct Delisle for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'delisle')).toBe('-600')
  })

  test('returns correct Delisle for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'delisle')).toBe('0')
  })

  test('returns correct Delisle for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'delisle')).toBe('150')
  })

  test('returns correct Delisle for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'delisle')).toBe('559.725')
  })
})

describe('correctly converts from Celsius to Newton', () => {
  test('returns correct Newton for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'newton')).toBe('165')
  })

  test('returns correct Newton for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'newton')).toBe('33')
  })

  test('returns correct Newton for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'newton')).toBe('0')
  })

  test('returns correct Newton for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'newton')).toBe('-90.1395')
  })
})

describe('correctly converts from Celsius to Réaumur', () => {
  test('returns correct Réaumur for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'reaumur')).toBe('400')
  })

  test('returns correct Réaumur for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'reaumur')).toBe('80')
  })

  test('returns correct Réaumur for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'reaumur')).toBe('0')
  })

  test('returns correct Réaumur for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'reaumur')).toBe('-218.52')
  })
})

describe('correctly converts from Celsius to Rømer', () => {
  test('returns correct Rømer for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'romer')).toBe('270')
  })

  test('returns correct Rømer for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'romer')).toBe('60')
  })

  test('returns correct Rømer for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'romer')).toBe('7.5')
  })

  test('returns correct Rømer for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'romer')).toBe('-135.90375')
  })
})
