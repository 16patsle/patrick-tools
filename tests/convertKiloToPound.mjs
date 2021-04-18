import test from 'ava'
import convertKiloToPound from '../src/utils/convertKiloToPound.js'

test('returns false on non-number input', t => {
  t.is(convertKiloToPound('numb3r'), false)
})

test('returns false on NaN', t => {
  t.is(convertKiloToPound(NaN), false)
})

test('returns correct for 1 kg to pound (avoirdupois)', t => {
  t.is(convertKiloToPound(1), 0.45359237)
})

test('returns correct for 2 kg to pound (avoirdupois)', t => {
  t.is(convertKiloToPound(2), 0.90718474)
})

test('returns correct 1 lb (avoirdupois) for equivalent kg', t => {
  t.is(convertKiloToPound(2.20462262), 1)
})
