import React from 'react'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import { useConverterState } from '../utils/useConverterState'
import convertCelsiusToFahrenheit from '../utils/convertCelsiusToFahrenheit'
import convertFahrenheitToCelsius from '../utils/convertFahrenheitToCelsius'

const CelsiusFahrenheitConverter = () => {
  const [celsius, setCelsius, recalculateFromCelsius] = useConverterState(
    '',
    (celsius): void => setFahrenheit(convertCelsiusToFahrenheit(celsius))
  )
  const [fahrenheit, setFahrenheit, recalculateFromFahrenheit] =
    useConverterState('', (fahrenheit): void =>
      setCelsius(convertFahrenheitToCelsius(fahrenheit))
    )

  return (
    <div className="max-w-md">
      <Heading2>Convert Celsius to and from Fahrenheit</Heading2>
      <Input type="number" value={celsius} onChange={recalculateFromCelsius}>
        Celsius (°C)
      </Input>
      <Input
        type="number"
        value={fahrenheit}
        onChange={recalculateFromFahrenheit}
      >
        Fahrenheit (°F)
      </Input>
    </div>
  )
}

export default CelsiusFahrenheitConverter
