import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import Input from '../components/Input'
import Heading2 from '../components/Heading2'
import convertKiloToPound from '../utils/convertKiloToPound'
import convertPoundToKilo from '../utils/convertPoundToKilo'

let delayedSetKilo
let delayedSetPound

const KiloPoundConverter = () => {
  const [kilo, setKilo] = useState('')
  const [pound, setPound] = useState('')

  if (!delayedSetKilo) {
    delayedSetKilo = debounce(setKilo, 200)
  }
  if (!delayedSetPound) {
    delayedSetPound = debounce(setPound, 200)
  }

  useEffect(() => {
    const newDecimal = pound === '' ? '' : convertPoundToKilo(parseFloat(pound))
    if (newDecimal !== false) {
      delayedSetKilo(String(newDecimal))
    }

    return delayedSetKilo.cancel
  }, [pound])

  useEffect(() => {
    const newRoman = kilo === '' ? '' : convertKiloToPound(parseFloat(kilo))
    if (newRoman !== false) {
      delayedSetPound(newRoman)
    }

    return delayedSetPound.cancel
  }, [kilo])

  return (
    <div className="max-w-md">
      <Heading2>Convert kilograms to and from pounds</Heading2>
      <Input type="number" min="0" value={kilo} onChange={setKilo}>
        Kilograms (kg)
      </Input>
      <Input type="number" min="0" value={pound} onChange={setPound}>
        Pounds (lb)
      </Input>
    </div>
  )
}

export default KiloPoundConverter
