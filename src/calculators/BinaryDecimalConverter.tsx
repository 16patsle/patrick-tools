import React, { useState } from 'react'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Heading2 from '../components/Heading2'
import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'
import { useConverterState } from '../utils/useConverterState'

const BinaryDecimalConverter = () => {
  const [binary, setBinary, recalculateFromBinary] = useConverterState(
    '',
    (b, t): void => setDecimal(String(convertBinaryToDecimal(b, t)))
  )
  const [decimal, setDecimal, recalculateFromDecimal] = useConverterState(
    '',
    (d, t): void => setBinary(convertDecimalToBinary(d, t))
  )
  const [twosComplement, setTwosComplement] = useState(false)

  const calculateFromBinary = (b: string) =>
    recalculateFromBinary(b, twosComplement)

  const calculateFromDecimal = (d: string) =>
    recalculateFromDecimal(d, twosComplement)

  const calculateUpdatedTwosComplement = (t: boolean) => {
    setTwosComplement(t)
    recalculateFromDecimal(decimal, t)
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
