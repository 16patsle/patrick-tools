import { expect, test } from 'vitest'
import convertBinaryToDecimal from '../src/utils/convertBinaryToDecimal'

test('only accepts binary numbers written as strings', () => {
  expect(convertBinaryToDecimal('11a')).toBe(false)
})

test("does not accept minus sign in two's complement mode", () => {
  expect(convertBinaryToDecimal('-11', true)).toBe(false)
})

test('handles simple binary number', () => {
  expect(convertBinaryToDecimal('110')).toBe(6)
})

test('handles a longer binary number', () => {
  expect(convertBinaryToDecimal('1110111010')).toBe(
    512 + 256 + 128 + 32 + 16 + 8 + 2
  )
})

test("handles binary number using two's complement", () => {
  expect(convertBinaryToDecimal('01101100', true)).toBe(108)
})

test("handles negative binary number using two's complement", () => {
  expect(convertBinaryToDecimal('10010100', true)).toBe(-108)
})

test('handles negative binary number using minus sign', () => {
  expect(convertBinaryToDecimal('-1101100')).toBe(-108)
})
