import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Heading2 from '../components/Heading2'
import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'
import { useNonFalseState } from '../utils/useNonFalseState'

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useNonFalseState('')
  const [decimal, setDecimal] = useNonFalseState('')
  const [twosComplement, setTwosComplement] = useState(false)

  const debouncedSetDecimal = useCallback(
    debounce(
      b => setDecimal(String(convertBinaryToDecimal(b, twosComplement))),
      200
    ),
    []
  )

  const calculateFromBinary = (/** @type {string} */ b) => {
    setBinary(b)
    debouncedSetDecimal(b)
  }

  const debouncedSetBinary = useCallback(
    debounce(d => setBinary(convertDecimalToBinary(d, twosComplement)), 200),
    []
  )

  const calculateFromDecimal = (/** @type {string} */ d) => {
    setDecimal(d)
    debouncedSetBinary(d)
  }

  const debouncedSetTwosComplement = useCallback(
    debounce(t => {
      console.log(t)
      return setBinary(convertDecimalToBinary(decimal, t))
    }, 200),
    []
  )

  const calculateUpdatedTwosComplement = (/** @type {boolean} */ t) => {
    setTwosComplement(t)
    debouncedSetTwosComplement(t)
  }

  return (
    <div className="max-w-md">
      <Heading2>Convert numbers to and from binary</Heading2>
      <Input
        pattern="[-01]+"
        value={binary}
        onChange={calculateFromBinary}
        onKeyPress={e => {
          if (e.key !== '1' && e.key !== '0' && e.key !== '-') {
            e.preventDefault()
          }
        }}
      >
        Binary
      </Input>
      <Input
        type="number"
        value={decimal}
        onChange={calculateFromDecimal}
        onKeyPress={e => {
          if (e.key === '.' || e.key === ',') {
            e.preventDefault()
          }
        }}
      >
        Decimal
      </Input>
      <Checkbox checked={twosComplement} onChange={calculateUpdatedTwosComplement}>
        Use two's complement
      </Checkbox>
    </div>
  )
}

export default BinaryDecimalConverter
