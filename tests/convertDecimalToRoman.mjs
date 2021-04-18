import test from 'ava'
import convertDecimalToRoman from '../src/utils/convertDecimalToRoman.js'

test('handles three', t => {
  t.is(convertDecimalToRoman(3), 'III')
})

test('handles four', t => {
  t.is(convertDecimalToRoman(4), 'IV')
})

test('handles eight', t => {
  t.is(convertDecimalToRoman(8), 'VIII')
})

test('handles nine', t => {
  t.is(convertDecimalToRoman(9), 'IX')
})

test('handles ten', t => {
  t.is(convertDecimalToRoman(10), 'X')
})

test('properly converts 1111', t => {
  t.is(convertDecimalToRoman(1111), 'MCXI')
})