import React, { useState } from 'react'

import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'

const BinaryDecimalConverter = () => {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState('')

  const updateBinary = e => {
    const value = e.target.value

    setBinary(value)
    setDecimal(String(convertBinaryToDecimal(value)) || '')
  }

  const updateDecimal = e => {
    const value = e.target.value

    setDecimal(value)
    setBinary(convertDecimalToBinary(value) || '')
  }

  return (
    <div>
      <h2 className="text-2xl">Convert to and from binary</h2>
      <label className="block m-2">
        Binary:
        <input
          type="text"
          pattern="[01]+"
          value={binary}
          onChange={updateBinary}
          onKeyPress={e => {
            if (e.key !== '1' && e.key !== '0' && e.key !== '-') {
              e.preventDefault()
            }
          }}
          className="shadow-md bg-gray-50 border-gray-200 border-2 rounded-md mx-2 p-1"
        />
      </label>
      <label className="block m-2">
        Decimal:
        <input
          type="number"
          value={decimal}
          onChange={updateDecimal}
          onKeyPress={e => {
            if (e.key === '.' || e.key === ',') {
              e.preventDefault()
            }
          }}
          className="shadow-md bg-gray-50 border-gray-200 border-2 rounded-md mx-2 p-1"
        />
      </label>
    </div>
  )
}

export default BinaryDecimalConverter
