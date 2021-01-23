import test from 'ava'
import convertBinaryToDecimal from '../src/utils/convertBinaryToDecimal.js'

test('only accepts binary numbers written as strings', t => {
  t.is(convertBinaryToDecimal('11a'), false)
})

test("does not accept minus sign in two's complement mode", t => {
  t.is(convertBinaryToDecimal('-11', true), false)
})

test('handles simple binary number', t => {
  t.is(convertBinaryToDecimal('110'), 6)
})

test('handles a longer binary number', t => {
  t.is(convertBinaryToDecimal('1110111010'), 512 + 256 + 128 + 32 + 16 + 8 + 2)
})

test("handles binary number using two's complement", t => {
  t.is(convertBinaryToDecimal('01101100', true), 108)
})

test("handles negative binary number using two's complement", t => {
  t.is(convertBinaryToDecimal('10010100', true), -108)
})

test('handles negative binary number using minus sign', t => {
  t.is(convertBinaryToDecimal('-1101100'), -108)
})
