import { expect, test } from 'vitest'
import convertDecimalToBinary from '../src/utils/convertDecimalToBinary'

test('only accepts actual numbers written as strings', () => {
  expect(convertDecimalToBinary('123a')).toBe( false)
})

test('handles simple number to binary', () => {
  expect(convertDecimalToBinary('6')).toBe('110')
})

test('handles a longer number to binary', () => {
  expect(
    convertDecimalToBinary(512 + 256 + 128 + 32 + 16 + 8 + 2 + '')
  ).toBe('1110111010')
})

test("handles convert to binary number using two's complement", () => {
  expect(convertDecimalToBinary('108', true)).toBe( '01101100')
})

test("handles convert to negative binary number using two's complement", () => {
  expect(convertDecimalToBinary('-108', true)).toBe( '10010100')
})

test('handles simple negative number to binary with sign', () => {
  expect(convertDecimalToBinary('-108')).toBe( '-1101100')
})
