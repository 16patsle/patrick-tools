import test from 'ava'
import convertCelsiusToFahrenheit from '../src/utils/convertCelsiusToFahrenheit.js'

test('returns false on non-number input', t => {
  t.is(convertCelsiusToFahrenheit('numb3r'), false)
})

test('returns false on NaN', t => {
  t.is(convertCelsiusToFahrenheit(NaN), false)
})

test('returns correct for equivalent of 0°F', t => {
  t.is(convertCelsiusToFahrenheit('-17.77778'), '0')
})

test('returns correct Fahrenheit for freezing point of water', t => {
  t.is(convertCelsiusToFahrenheit(0), '32')
})

test('returns correct Fahrenheit for boiling point of water', t => {
  t.is(convertCelsiusToFahrenheit(100, 8), '212')
})

test('returns correct Fahrenheit for human body temperature', t => {
  t.is(convertCelsiusToFahrenheit(37, 8), '98.6')
})

test('returns correct Fahrenheit for absolute zero', t => {
  t.is(convertCelsiusToFahrenheit(-273.15, 8), '-459.67')
})
