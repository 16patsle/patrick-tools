import { expect, test } from 'vitest'
import convertTextToASCIIBinary from '../src/utils/convertTextToASCIIBinary'

test('silently ignores non-ASCII characters', () => {
  expect(convertTextToASCIIBinary('A∆')).toBe( '01000001')
})

test('converts a single character into binary ASCII', () => {
  expect(convertTextToASCIIBinary('A')).toBe( '01000001')
})

test('converts a longer string into binary ASCII', () => {
  expect(convertTextToASCIIBinary('ABCDE')).toBe( '01000001 01000010 01000011 01000100 01000101')
})

test('converts a longer string into binary ASCII, without spaces', () => {
  expect(convertTextToASCIIBinary('ABCDE', false)).toBe( '0100000101000010010000110100010001000101')
})
