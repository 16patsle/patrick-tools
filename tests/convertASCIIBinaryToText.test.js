import { expect, test } from 'vitest'
import convertASCIIBinaryToText from '../src/utils/convertASCIIBinaryToText'

test('only accepts binary as string', () => {
  expect(convertASCIIBinaryToText('11a')).toBe(false)
})

test('silently ignores superfluous bytes', () => {
  expect(convertASCIIBinaryToText('0100000111')).toBe('A')
})

test('converts a single binary ASCII character into text', () => {
  expect(convertASCIIBinaryToText('01000001')).toBe('A')
})

test('converts a longer binary ASCII string into text', () => {
  expect(
    convertASCIIBinaryToText('0100000101000010010000110100010001000101')
  ).toBe('ABCDE')
})

test('converts a longer binary ASCII string into text, with spaces', () => {
  expect(
    convertASCIIBinaryToText('01000001 01000010 01000011 01000100 01000101')
  ).toBe('ABCDE')
})
