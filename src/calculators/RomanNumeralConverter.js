import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Heading2 from '../components/Heading2'
import convertBinaryToDecimal from '../utils/convertBinaryToDecimal'
import convertDecimalToBinary from '../utils/convertDecimalToBinary'
import convertDecimalToRoman from '../utils/convertDecimalToRoman'
convertDecimalToRoman

let delayedSetDecimal
let delayedSetRoman

const RomanNumeralConverter = () => {
  const [decimal, setDecimal] = useState('')
  const [roman, setRoman] = useState('')

  if (!delayedSetDecimal) {
    delayedSetDecimal = debounce(setDecimal, 200)
  }
  if (!delayedSetRoman) {
    delayedSetRoman = debounce(setRoman, 200)
  }

  useEffect(() => {
    const newDecimal = roman === '' ? '' : false // TODO: Implement converter
    if(newDecimal !== false) {
      delayedSetDecimal(String(newDecimal))
    }

    return delayedSetRoman.cancel
  }, [roman])

  useEffect(() => {
    const newRoman = decimal === '' ? '' : convertDecimalToRoman(decimal)
    if(newRoman !== false) {
      delayedSetRoman(newRoman)
    }
    
    return delayedSetRoman.cancel
  }, [decimal])

  return (
    <div className="max-w-md">
      <Heading2>Convert numbers to and from Roman numerals</Heading2>
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
      <Input
        pattern="[IVXLCDM]+"
        value={roman}
        onChange={val => setRoman(val.toUpperCase())}
        onKeyPress={e => {
          if (!['I','V','X','L','C','D','M'].includes(e.key.toUpperCase())) {
            e.preventDefault()
          }
        }}
      >
        Roman
      </Input>
    </div>
  )
}

export default RomanNumeralConverter
