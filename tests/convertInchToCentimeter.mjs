import test from 'ava'
import convertInchToCentimeter from '../src/utils/convertInchToCentimeter.js'

test('returns false on non-number input', t => {
  t.is(convertInchToCentimeter('numb3r'), false)
})

test('returns false on NaN', t => {
  t.is(convertInchToCentimeter(NaN), false)
})

test('returns correct 1 cm for equivalent inch', t => {
  t.is(convertInchToCentimeter(0.39370079), '1')
})

test('returns correct 2 cm for equivalent inch', t => {
  t.is(convertInchToCentimeter(0.78740157), '2')
})

test('returns correct for 1 inch to cm', t => {
  t.is(convertInchToCentimeter(1), '2.54')
})

test('returns correct for 5 inch to cm', t => {
  t.is(convertInchToCentimeter(5), '12.7')
})