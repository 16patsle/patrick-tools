import test from 'ava'
import convertFahrenheitToCelsius from '../src/utils/convertFahrenheitToCelsius'

test('returns false on non-number input', t => {
  t.is(convertFahrenheitToCelsius('numb3r'), false)
})

test('returns false on NaN', t => {
  t.is(convertFahrenheitToCelsius(NaN), false)
})

test('returns correct for 0°F', t => {
  t.is(convertFahrenheitToCelsius(0), '-17.77778')
})

test('returns correct Celsius for freezing point of water', t => {
  t.is(convertFahrenheitToCelsius(32), '0')
})

test('returns correct Celsius for boiling point of water', t => {
  t.is(convertFahrenheitToCelsius(212, 8), '100')
})

test('returns correct Celsius for human body temperature', t => {
  t.is(convertFahrenheitToCelsius(98.6, 8), '37')
})

test('returns correct Celsius for absolute zero', t => {
  t.is(convertFahrenheitToCelsius(-459.67, 8), '-273.15')
})
