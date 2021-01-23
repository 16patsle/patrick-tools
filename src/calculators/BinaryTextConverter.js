import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'

let delayedSetBinary
let delayedSetText

const BinaryTextConverter = () => {
  const [binary, setBinary] = useState('')
  const [text, setText] = useState('')

  if (!delayedSetBinary) {
    delayedSetBinary = debounce(setBinary, 200)
  }
  if (!delayedSetText) {
    delayedSetText = debounce(setText, 200)
  }

  useEffect(() => {
    const newBinary = false // TODO: Implement conversion
    if(newBinary !== false) {
      delayedSetBinary(newBinary)
    }
    
    return delayedSetBinary.cancel
  }, [text])

  useEffect(() => {
    const newText = false // TODO: Implement conversion
    if(newText !== false) {
      delayedSetText(String(newText))
    }

    return delayedSetBinary.cancel
  }, [binary])

  return (
    <div className="max-w-md">
      <h2 className="text-2xl mt-2 mb-3">Convert text to and from binary</h2>
      <Input
        pattern="[01]+"
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
        value={text}
        onChange={setText}
      >
        Text
      </Input>
    </div>
  )
}

export default BinaryTextConverter
