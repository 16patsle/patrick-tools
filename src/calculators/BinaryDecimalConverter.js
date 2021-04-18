import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Heading2 from '../components/Heading2'
import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'

let delayedSetBinary
let delayedSetDecimal

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState('')
  const [twosComplement, setTwosComplement] = useState(false)

  if (!delayedSetBinary) {
    delayedSetBinary = debounce(setBinary, 200)
  }
  if (!delayedSetDecimal) {
    delayedSetDecimal = debounce(setDecimal, 200)
  }

  useEffect(() => {
    const newBinary = decimal === '' ? '' : convertDecimalToBinary(decimal, twosComplement)
    if(newBinary !== false) {
      delayedSetBinary(newBinary)
    }
    
    return delayedSetBinary.cancel
  }, [decimal])

  useEffect(() => {
    const newDecimal = binary === '' ? '' : convertBinaryToDecimal(binary, twosComplement)
    if(newDecimal !== false) {
      delayedSetDecimal(String(newDecimal))
    }

    return delayedSetBinary.cancel
  }, [binary])

  useEffect(() => {
    const newBinary = decimal === '' ? '' : convertDecimalToBinary(decimal, twosComplement)
    if(newBinary !== false) {
      setBinary(newBinary)
    }
  }, [twosComplement])

  return (
    <div className="max-w-md">
      <Heading2>Convert numbers to and from binary</Heading2>
      <Input
        pattern="[-01]+"
        value={binary}
        onChange={setBinary}
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
        onChange={setDecimal}
        onKeyPress={e => {
          if (e.key === '.' || e.key === ',') {
            e.preventDefault()
          }
        }}
      >
        Decimal
      </Input>
      <Checkbox checked={twosComplement} onChange={setTwosComplement}>
        Use two's complement
      </Checkbox>
    </div>
  )
}

export default BinaryDecimalConverter
