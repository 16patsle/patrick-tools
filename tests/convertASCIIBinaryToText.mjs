import test from 'ava'
import convertASCIIBinaryToText from '../src/utils/convertASCIIBinaryToText.js'

test('only accepts binary as string', t => {
  t.is(convertASCIIBinaryToText('11a'), false)
})

test('only accepts strings consisting of whole bytes (%8==0)', t => {
  t.is(convertASCIIBinaryToText('1111111111'), false)
})

test('converts a single binary ASCII character into text', t=> {
  t.is(convertASCIIBinaryToText('01000001'), 'A')
})

test('converts a longer binary ASCII string into text', t=> {
  t.is(convertASCIIBinaryToText('0100000101000010010000110100010001000101'), 'ABCDE')
})

test('converts a longer binary ASCII string into text, with spaces', t=> {
  t.is(convertASCIIBinaryToText('01000001 01000010 01000011 01000100 01000101'), 'ABCDE')
})