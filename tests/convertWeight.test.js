import { expect, test } from 'vitest'
import { convertWeight } from '../src/utils/convertWeight'
import { generateTests } from './utils/generateTests'

test('returns false on non-number input', () => {
  expect(convertWeight('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertWeight(NaN)).toBe(false)
})

generateTests(convertWeight, 'milligram', 'kilogram', [
  ['1', '0.000001'],
  ['2', '0.000002'],
  ['1000000', '1'],
  ['2000000', '2'],
])

generateTests(convertWeight, 'kilogram', 'milligram', [
  ['0.000001', '1'],
  ['0.000002', '2'],
  ['1', '1000000'],
  ['2', '2000000'],
])

generateTests(convertWeight, 'gram', 'kilogram', [
  ['1', '0.001'],
  ['2', '0.002'],
  ['1000', '1'],
  ['2000', '2'],
])

generateTests(convertWeight, 'kilogram', 'gram', [
  ['0.001', '1'],
  ['0.002', '2'],
  ['1', '1000'],
  ['2', '2000'],
])

generateTests(convertWeight, 'tonne', 'kilogram', [
  ['1', '1000'],
  ['2', '2000'],
  ['0.001', '1'],
  ['0.002', '2'],
])

generateTests(convertWeight, 'kilogram', 'tonne', [
  ['1000', '1'],
  ['2000', '2'],
  ['1', '0.001'],
  ['2', '0.002'],
])

generateTests(
  convertWeight,
  'pound',
  'kilogram',
  [
    ['1', '0.45359'],
    ['2', '0.90718'],
    ['1000', '453.59237'],
    ['2000', '907.18474'],
  ],
  5
)

generateTests(
  convertWeight,
  'kilogram',
  'pound',
  [
    ['0.45359237', '1'],
    ['0.907185', '2'],
    ['453.59237', '1000'],
    ['907.18474', '2000'],
  ],
  5
)

generateTests(
  convertWeight,
  'ounce',
  'kilogram',
  [
    ['1', '0.02835'],
    ['2', '0.0567'],
    ['100', '2.83495'],
    ['200', '5.6699'],
    ['35.27396', '1'],
    ['70.54792', '2'],
  ],
  5
)

generateTests(
  convertWeight,
  'kilogram',
  'ounce',
  [
    ['0.0283495', '1'],
    ['0.056699', '2'],
    ['2.8349524', '100'],
    ['5.6699045', '200'],
    ['1', '35.27396'],
    ['2', '70.54792'],
  ],
  5
)

generateTests(
  convertWeight,
  'tonUS',
  'pound',
  [
    ['1', '2000'],
    ['2', '4000'],
    ['0.0005', '1'],
    ['0.001', '2'],
  ],
  5
)

generateTests(
  convertWeight,
  'pound',
  'tonUS',
  [
    ['2000', '1'],
    ['4000', '2'],
    ['1', '0.0005'],
    ['2', '0.001'],
  ],
  5
)

generateTests(
  convertWeight,
  'tonUK',
  'pound',
  [
    ['1', '2240'],
    ['2', '4480'],
    ['0.00045', '1'],
    ['0.00089', '2'],
  ],
  1
)

generateTests(
  convertWeight,
  'pound',
  'tonUK',
  [
    ['2240', '1'],
    ['4480', '2'],
    ['1', '0.00045'],
    ['2', '0.00089'],
  ],
  5
)
