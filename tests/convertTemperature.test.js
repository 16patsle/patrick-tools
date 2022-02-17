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
    expect(convertTemperature(500, 'celsius', 'kelvin').toString()).toBe('773.15')
  })

  test('returns correct Kelvin for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'kelvin').toString()).toBe('373.15')
  })

  test('returns correct Kelvin for human body temperature in Celsius', () => {
    expect(convertTemperature(37, 'celsius', 'kelvin').toString()).toBe('310.15')
  })

  test('returns correct Kelvin for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'kelvin').toString()).toBe('273.15')
  })

  test('returns correct Kelvin for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'kelvin').toString()).toBe('0')
  })
})

describe('correctly converts from Celsius to Fahrenheit', () => {
  test('returns correct Fahrenheit for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'fahrenheit').toString()).toBe('932')
  })

  test('returns correct Fahrenheit for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'fahrenheit').toString()).toBe('212')
  })  

  test('returns correct Fahrenheit for human body temperature in Celsius', () => {
    expect(convertTemperature(37, 'celsius', 'fahrenheit').toString()).toBe('98.6')
  })

  test('returns correct Fahrenheit for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'fahrenheit').toString()).toBe('32')
  })

  test('returns correct Fahrenheit for Celsius equivalent of 0°F', () => {
    expect(convertTemperature('-17.77778', 'celsius', 'fahrenheit', 5).toString()).toBe('0')
  })

  test('returns correct Fahrenheit for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'fahrenheit').toString()).toBe('-459.67')
  })
})

describe('correctly converts from Celsius to Rankine', () => {
  test('returns correct Rankine for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'rankine').toString()).toBe('1391.67')
  })

  test('returns correct Rankine for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'rankine').toString()).toBe('671.67')
  })

  test('returns correct Rankine for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'rankine').toString()).toBe('491.67')
  })

  test('returns correct Rankine for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'rankine').toString()).toBe('0')
  })
})

describe('correctly converts from Celsius to Delisle', () => {
  test('returns correct Delisle for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'delisle').toString()).toBe('-600')
  })

  test('returns correct Delisle for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'delisle').toString()).toBe('0')
  })

  test('returns correct Delisle for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'delisle').toString()).toBe('150')
  })

  test('returns correct Delisle for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'delisle').toString()).toBe('559.725')
  })
})

describe('correctly converts from Celsius to Newton', () => {
  test('returns correct Newton for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'newton').toString()).toBe('165')
  })

  test('returns correct Newton for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'newton').toString()).toBe('33')
  })

  test('returns correct Newton for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'newton').toString()).toBe('0')
  })

  test('returns correct Newton for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'newton').toString()).toBe('-90.1395')
  })
})

describe('correctly converts from Celsius to Réaumur', () => {
  test('returns correct Réaumur for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'reaumur').toString()).toBe('400')
  })

  test('returns correct Réaumur for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'reaumur').toString()).toBe('80')
  })

  test('returns correct Réaumur for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'reaumur').toString()).toBe('0')
  })

  test('returns correct Réaumur for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'reaumur').toString()).toBe('-218.52')
  })
})

describe('correctly converts from Celsius to Rømer', () => {
  test('returns correct Rømer for 500°C', () => {
    expect(convertTemperature(500, 'celsius', 'romer').toString()).toBe('270')
  })

  test('returns correct Rømer for boiling point of water in Celsius', () => {
    expect(convertTemperature(100, 'celsius', 'romer').toString()).toBe('60')
  })

  test('returns correct Rømer for freezing point of water in Celsius', () => {
    expect(convertTemperature(0, 'celsius', 'romer').toString()).toBe('7.5')
  })

  test('returns correct Rømer for absolute zero in Celsius', () => {
    expect(convertTemperature(-273.15, 'celsius', 'romer').toString()).toBe('-135.90375')
  })
})

describe('correctly converts to Kelvin from various units', () => {
  test('returns correct Kelvin for freezing point of water in Kelvin', () => {
    expect(convertTemperature(273.15, 'kelvin', 'kelvin', 5).toString()).toBe('273.15')
  })
  test('returns correct Kelvin for freezing point of water in Fahrenheit', () => {
    expect(convertTemperature(32, 'fahrenheit', 'kelvin', 5).toString()).toBe('273.15')
  })
  test('returns correct Kelvin for freezing point of water in Rankine', () => {
    expect(convertTemperature(491.67, 'rankine', 'kelvin', 5).toString()).toBe('273.15')
  })
  test('returns correct Kelvin for freezing point of water in Delisle', () => {
    expect(convertTemperature(150, 'delisle', 'kelvin', 5).toString()).toBe('273.15')
  })
  test('returns correct Kelvin for freezing point of water in Newton', () => {
    expect(convertTemperature(0, 'newton', 'kelvin').toString()).toBe('273.15')
  })
  test('returns correct Kelvin for freezing point of water in Réaumur', () => {
    expect(convertTemperature(0, 'reaumur', 'kelvin').toString()).toBe('273.15')
  })
  test('returns correct Kelvin for freezing point of water in Rømer', () => {
    expect(convertTemperature(7.5, 'romer', 'kelvin').toString()).toBe('273.15')
  })
})

describe('correctly converts between various other unit combinations', () => {
  test('returns correct Celsius for freezing point of water in Kelvin', () => {
    expect(convertTemperature(273.15, 'kelvin', 'celsius').toString()).toBe('0')
  })
  test('returns correct Rankine for freezing point of water in Fahrenheit', () => {
    expect(convertTemperature(32, 'fahrenheit', 'rankine').toString()).toBe('491.67')
  })
  test('returns correct Fahrenheit for freezing point of water in Rankine', () => {
    expect(convertTemperature(491.67, 'rankine', 'fahrenheit').toString()).toBe('32')
  })
})
