import test from 'ava'
import convertDecimalToBinary from '../src/utils/convertDecimalToBinary.mjs'

test('only accepts actual numbers written as strings', t => {
  t.is(convertDecimalToBinary('123a'), false)
})

test('handles simple number to binary', t => {
  t.is(convertDecimalToBinary('6'), '110')
})

test('handles a longer number to binary', t => {
  t.is(
    convertDecimalToBinary(512 + 256 + 128 + 32 + 16 + 8 + 2 + ''),
    '1110111010'
  )
})

test("handles convert to binary number using two's complement", t => {
  t.is(convertDecimalToBinary('108', true), '01101100')
})

test("handles convert to negative binary number using two's complement", t => {
  t.is(convertDecimalToBinary('-108', true), '10010100')
})
