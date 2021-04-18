import test from 'ava'
import convertPoundToKilo from '../src/utils/convertPoundToKilo.js'

test('returns false on non-number input', t => {
  t.is(convertPoundToKilo('numb3r'), false)
})

test('returns correct 1 kg for equivalent pound (avoirdupois)', t => {
  t.is(convertPoundToKilo(0.45359237), 1)
})

test('returns correct 2 kg for equivalent pound (avoirdupois)', t => {
  t.is(convertPoundToKilo(0.90718474), 2)
})

test('returns correct for 1 lb (avoirdupois) to kg', t => {
  t.is(convertPoundToKilo(1), 2.20462262)
})
