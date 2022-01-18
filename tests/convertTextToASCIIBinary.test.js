import test from 'ava'
import convertTextToASCIIBinary from '../src/utils/convertTextToASCIIBinary'

test('silently ignores non-ASCII characters', t => {
  t.is(convertTextToASCIIBinary('A∆'), '01000001')
})

test('converts a single character into binary ASCII', t=> {
  t.is(convertTextToASCIIBinary('A'), '01000001')
})

test('converts a longer string into binary ASCII', t=> {
  t.is(convertTextToASCIIBinary('ABCDE'), '01000001 01000010 01000011 01000100 01000101')
})

test('converts a longer string into binary ASCII, without spaces', t=> {
  t.is(convertTextToASCIIBinary('ABCDE', false), '0100000101000010010000110100010001000101')
})
