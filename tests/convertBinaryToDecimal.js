import test from 'ava'
import convertBinaryToDecimal from '../src/utils/convertBinaryToDecimal.js'

test('only accepts binary numbers written as strings', t => {
  t.is(convertBinaryToDecimal('11a'), false)
})

test('handles simple binary number', t => {
  t.is(convertBinaryToDecimal('110'), 6)
})

test('handles a longer binary number', t => {
  t.is(convertBinaryToDecimal('1110111010'), 512 + 256 + 128 + 32 + 16 + 8 + 2)
})
