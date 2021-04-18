import React, { useState } from 'react'
import debounce from 'lodash.debounce'
import Big from 'big.js'
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

  const poundChanged = (/** @type {string} */ p) => {
    setPound(p)
    const newKilo = p === '' ? '' : convertPoundToKilo(p)
    if (newKilo !== false) {
      delayedSetKilo(newKilo)
    }
  }

  const kiloChanged = (/** @type {string} */ k) => {
    setKilo(k)
    const newPound = k === '' ? '' : convertKiloToPound(k)
    if (newPound !== false) {
      delayedSetPound(newPound)
    }
  }

  return (
    <div className="max-w-md">
      <Heading2>Convert kilograms to and from pounds</Heading2>
      <Input type="number" min="0" value={kilo} onChange={kiloChanged}>
        Kilograms (kg)
      </Input>
      <Input type="number" min="0" value={pound} onChange={poundChanged}>
        Pounds (lb)
      </Input>
    </div>
  )
}

export default KiloPoundConverter
