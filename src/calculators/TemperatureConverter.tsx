import { useState } from 'react'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import { useConverterState } from '../utils/useConverterState'
import convertCelsiusToFahrenheit from '../utils/convertCelsiusToFahrenheit'
import convertFahrenheitToCelsius from '../utils/convertFahrenheitToCelsius'
import { Select } from '../components/Select'

import { temperature } from '../data/temperature'

const UnitSelect = ({
  unit: [value, setValue],
}: {
  unit: [string, (value: string) => void]
}) => {
  return (
    <Select value={value} onChange={setValue}>
      {temperature.map(({ name, display, symbol }) => (
        <option key={name} value={name}>
          {display} ({symbol})
        </option>
      ))}
    </Select>
  )
}

const TemperatureConverter = () => {
  const [celsius, setCelsius, recalculateFromCelsius] = useConverterState(
    '',
    (celsius): void => setFahrenheit(convertCelsiusToFahrenheit(celsius))
  )
  const [fahrenheit, setFahrenheit, recalculateFromFahrenheit] =
    useConverterState('', (fahrenheit): void =>
      setCelsius(convertFahrenheitToCelsius(fahrenheit))
    )

  const unitFirst = useState('celsius')
  const unitSecond = useState('fahrenheit')
  const unitFirstData = temperature.find(value=>value.name===unitFirst[0])
  const unitSecondData = temperature.find(value=>value.name===unitSecond[0])

  return (
    <div className="max-w-lg">
      <Heading2>
        Convert temperature
      </Heading2>
      <UnitSelect unit={unitFirst} />
      <Input type="number" value={celsius} onChange={recalculateFromCelsius}>
        {unitFirstData?.display} ({unitFirstData?.symbol})
      </Input>
      <UnitSelect unit={unitSecond} />
      <Input
        type="number"
        value={fahrenheit}
        onChange={recalculateFromFahrenheit}
      >
        {unitSecondData?.display} ({unitSecondData?.symbol})
      </Input>
    </div>
  )
}

export default TemperatureConverter
