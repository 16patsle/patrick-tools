import React, { useState } from 'react'
import Input from '../components/Input'

import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState('')

  /**
   * @param {string} value
   */
  const updateBinary = value => {
    setBinary(value)
    setDecimal(String(convertBinaryToDecimal(value)) || '')
  }

  /**
   * @param {string} value
   */
  const updateDecimal = value => {
    setDecimal(value)
    setBinary(convertDecimalToBinary(value) || '')
  }

  return (
    <div>
      <h2 className="text-2xl">Convert to and from binary</h2>
      <Input
        pattern="[01]+"
        value={binary}
        onChange={updateBinary}
        onKeyPress={e => {
          if (e.key !== '1' && e.key !== '0' && e.key !== '-') {
            e.preventDefault()
          }
        }}
      >
        Binary:
      </Input>
      <Input
        type="number"
        value={decimal}
        onChange={updateDecimal}
        onKeyPress={e => {
          if (e.key === '.' || e.key === ',') {
            e.preventDefault()
          }
        }}
      >
        Decimal:
      </Input>
    </div>
  )
}

export default BinaryDecimalConverter
