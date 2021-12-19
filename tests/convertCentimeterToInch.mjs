import test from 'ava'
import convertCentimeterToInch from '../src/utils/convertCentimeterToInch.js'

test('returns false on non-number input', t => {
  t.is(convertCentimeterToInch('numb3r'), false)
})

test('returns false on NaN', t => {
  t.is(convertCentimeterToInch(NaN), false)
})

test('returns correct for 1 cm to inch', t => {
  t.is(convertCentimeterToInch(1, 8), '0.39370079')
})

test('returns correct for 2 cm to inch', t => {
  t.is(convertCentimeterToInch(2, 8), '0.78740157')
})

test('returns correct 1 inch for equivalent cm', t => {
  t.is(convertCentimeterToInch(2.54, 8), '1')
})

test('returns correct 5 inch for equivalent cm', t => {
  t.is(convertCentimeterToInch(12.7, 8), '5')
})
