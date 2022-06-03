import { expect, test } from 'vitest'
import { convertLength } from '../src/utils/convertLength'
import { generateTests } from './utils/generateTests'

test('returns false on non-number input', () => {
  expect(convertLength('numb3r')).toBe(false)
})

test('returns false on NaN', () => {
  expect(convertLength(NaN)).toBe(false)
})

generateTests(convertLength, 'picometer', 'meter', [
    ['1', '1e-12'],
    ['2', '2e-12'],
])

generateTests(convertLength, 'meter', 'picometer', [
    ['1e-12', '1'],
    ['2e-12', '2'],
])

generateTests(convertLength, 'angstrom', 'meter', [
    ['1', '1e-10'],
    ['2', '2e-10'],
])

generateTests(convertLength, 'meter', 'angstrom', [
    ['1e-10', '1'],
    ['2e-10', '2'],
])

generateTests(convertLength, 'nanometer', 'meter', [
    ['1', '1e-9'],
    ['2', '2e-9'],
])

generateTests(convertLength, 'meter', 'nanometer', [
    ['1e-9', '1'],
    ['2e-9', '2'],
])

generateTests(convertLength, 'micrometer', 'meter', [
    ['1', '0.000001'],
    ['2', '0.000002'],
])

generateTests(convertLength, 'meter', 'micrometer', [
    ['0.000001', '1'],
    ['0.000002', '2'],
])

generateTests(convertLength, 'millimeter', 'meter', [
    ['1', '0.001'],
    ['2', '0.002'],
    ['1000', '1'],
    ['2000', '2'],
])

generateTests(convertLength, 'meter', 'millimeter', [
    ['0.001', '1'],
    ['0.002', '2'],
    ['1', '1000'],
    ['2', '2000'],
])

generateTests(convertLength, 'centimeter', 'meter', [
    ['1', '0.01'],
    ['2', '0.02'],
    ['100', '1'],
    ['200', '2'],
])

generateTests(convertLength, 'meter', 'centimeter', [
    ['0.01', '1'],
    ['0.02', '2'],
    ['1', '100'],
    ['2', '200'],
])

generateTests(convertLength, 'kilometer', 'meter', [
    ['1', '1000'],
    ['2', '2000'],
    ['0.001', '1'],
    ['0.002', '2'],
])

generateTests(convertLength, 'meter', 'kilometer', [
    ['1000', '1'],
    ['2000', '2'],
    ['1', '0.001'],
    ['2', '0.002'],
])

generateTests(convertLength, 'gigameter', 'meter', [
    ['1', '1000000000'],
    ['2', '2000000000'],
    ['1e-9', '1'],
    ['2e-9', '2'],
])

generateTests(convertLength, 'meter', 'gigameter', [
    ['1e9', '1'],
    ['2e9', '2'],
    ['1', '1e-9'],
    ['2', '2e-9'],
])

generateTests(
  convertLength,
  'inch',
  'centimeter',
  [
    ['0.39370079', '1'],
    ['0.78740157', '2'],
    ['1', '2.54'],
    ['5', '12.7'],
  ],
  5
)

generateTests(
  convertLength,
  'centimeter',
  'inch',
  [
    ['1', '0.39370079'],
    ['2', '0.78740157'],
    ['2.54', '1'],
    ['12.7', '5'],
  ],
  8
)

generateTests(
  convertLength,
  'meter',
  'foot',
  [
    ['1', '3.28084'],
    ['2', '6.56168'],
    ['0.3048', '1'],
  ],
  5
)

generateTests(
  convertLength,
  'foot',
  'meter',
  [
    ['3.28084', '1'],
    ['6.56168', '2'],
    ['1', '0.3048'],
  ],
  5
)

generateTests(
  convertLength,
  'foot',
  'yard',
  [
    ['1', '0.33333'],
    ['2', '0.66667'],
    ['3', '1'],
  ],
  5
)

generateTests(
  convertLength,
  'yard',
  'foot',
  [
    ['0.333333', '1'],
    ['0.666667', '2'],
    ['1', '3'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'yard',
  [
    ['1', '1.09361'],
    ['2', '2.18723'],
    ['0.9144', '1'],
    ['1.8288', '2'],
  ],
  5
)

generateTests(
  convertLength,
  'yard',
  'meter',
  [
    ['1.09361', '1'],
    ['2.18723', '2'],
    ['1', '0.9144'],
    ['2', '1.8288'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'fathom',
  [
    ['4', '2.18723'],
    ['1.8288', '1'],
  ],
  5
)

generateTests(
  convertLength,
  'fathom',
  'meter',
  [
    ['2.18723', '4'],
    ['1', '1.8288'],
  ],
  4
)

generateTests(
  convertLength,
  'meter',
  'chain',
  [
    ['1', '0.04971'],
    ['20.1168', '1'],
    ['40.2336', '2'],
  ],
  5
)

generateTests(
  convertLength,
  'chain',
  'meter',
  [
    ['0.0497097', '1'],
    ['1', '20.1168'],
    ['2', '40.2336'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'rod',
  [
    ['1', '0.19884'],
    ['5.0292', '1'],
    ['10.0584', '2'],
    ['20.1168', '4'],
    ['40.2336', '8'],
  ],
  5
)

generateTests(
  convertLength,
  'rod',
  'meter',
  [
    ['0.198838', '1'],
    ['1', '5.0292'],
    ['2', '10.0584'],
    ['4', '20.1168'],
    ['8', '40.2336'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'link',
  [
    ['0.01', '0.04971'],
    ['0.201168', '1'],
    ['0.402336', '2'],
    ['1', '4.97097'],
    ['20.1168', '100'],
    ['40.2336', '200'],
  ],
  5
)

generateTests(
  convertLength,
  'link',
  'meter',
  [
    ['0.0497097', '0.01'],
    ['1', '0.20117'],
    ['2', '0.40234'],
    ['4.97097', '1'],
    ['100', '20.1168'],
    ['200', '40.2336'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'furlong',
  [
    ['1', '0.00497'],
    ['201.168', '1'],
    ['402.336', '2'],
  ],
  5
)

generateTests(
  convertLength,
  'furlong',
  'meter',
  [
    ['0.00497097', '1'],
    ['1', '201.168'],
    ['2', '402.336'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'mile',
  [
    ['10', '0.00621'],
    ['100', '0.06214'],
    ['1000', '0.62137'],
    ['1609.34', '1'],
    ['3218.69', '2'],
  ],
  5
)

generateTests(
  convertLength,
  'mile',
  'meter',
  [
    ['0.00621371195', '10'],
    ['0.0621371195', '100'],
    ['0.621371195', '1000'],
    ['1', '1609.344'],
    ['2', '3218.688'],
  ],
  5
)

generateTests(
  convertLength,
  'meter',
  'nauticalMile',
  [
    ['1', '0.53996'],
    ['2', '1.07991'],
    ['1.852', '1'],
    ['3.704', '2'],
  ],
  5
)

generateTests(
  convertLength,
  'nauticalMile',
  'meter',
  [
    ['0.539956803', '1'],
    ['1.079913606', '2'],
    ['1', '1.852'],
    ['2', '3.704'],
  ],
  5
)

