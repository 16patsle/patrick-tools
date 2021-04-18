import test from 'ava'
import convertRomanToDecimal from '../src/utils/convertRomanToDecimal.js'

test('handles three, III', t => {
  t.is(convertRomanToDecimal('III'), 3)
})

test('handles four, IV', t => {
  t.is(convertRomanToDecimal('IV'), 4)
})

test('handles eight, VIII', t => {
  t.is(convertRomanToDecimal('VIII'), 8)
})

test('handles nine, IX', t => {
  t.is(convertRomanToDecimal('IX'), 9)
})

test('handles ten, X', t => {
  t.is(convertRomanToDecimal('X'), 10)
})

test('properly converts DXLII', t => {
  t.is(convertRomanToDecimal('DXLII'), 542)
})

test('properly converts MCXI', t => {
  t.is(convertRomanToDecimal('MCXI'), 1111)
})

test('properly converts MMMMMDCCLXXXVI', t => {
  t.is(convertRomanToDecimal('MMMMMDCCLXXXVI'), 5786)
})

test('properly converts MMMMMMMMMMMDCCLXXXVI', t => {
  t.is(convertRomanToDecimal('MMMMMMMMMMMDCCLXXXVI'), 11786)
})

test('returns false on invalid Roman numeral', t => {
  t.is(convertRomanToDecimal('XIVA'), false)
})