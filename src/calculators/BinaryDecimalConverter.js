import React, { useState } from 'react'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Heading2 from '../components/Heading2'
import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'
import { useNonFalseState } from '../utils/useNonFalseState'
import { useDebouncedCallback } from '../utils/useDebounceCallback'

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useNonFalseState('')
  const debouncedSetBinary = useDebouncedCallback((d, t) =>
    setBinary(convertDecimalToBinary(d, t))
  )
  const [decimal, setDecimal] = useNonFalseState('')
  const debouncedSetDecimal = useDebouncedCallback((b, t) =>
    setDecimal(String(convertBinaryToDecimal(b, t)))
  )
  const [twosComplement, setTwosComplement] = useState(false)

  const calculateFromBinary = (/** @type {string} */ b) => {
    setBinary(b)
    debouncedSetDecimal(b, twosComplement)
  }

  const calculateFromDecimal = (/** @type {string} */ d) => {
    setDecimal(d)
    debouncedSetBinary(d, twosComplement)
  }

  const debouncedRecalculateTC = useDebouncedCallback(t =>
    setBinary(convertDecimalToBinary(decimal, t))
  )

  const calculateUpdatedTwosComplement = (/** @type {boolean} */ t) => {
    setTwosComplement(t)
    debouncedRecalculateTC(t)
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
      <Checkbox
        checked={twosComplement}
        onChange={calculateUpdatedTwosComplement}
      >
        Use two's complement
      </Checkbox>
    </div>
  )
}

export default BinaryDecimalConverter
