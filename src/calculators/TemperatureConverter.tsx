import { useState } from 'react'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import { useConverterState } from '../utils/useConverterState'
import { convertTemperature } from '../utils/convertTemperature'
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
  const [valueFirst, setValueFirst, recalculateFromValueFirst] =
    useConverterState('', (value, from, to): void =>
      setValueSecond(convertTemperature(value, from, to))
    )
  const [valueSecond, setValueSecond, recalculateFromValueSecond] =
    useConverterState('', (value, from, to): void =>
      setValueFirst(convertTemperature(value, from, to))
    )

  const [unitFirst, setUnitFirst] = useState('celsius')
  const [unitSecond, setUnitSecond] = useState('fahrenheit')
  const unitFirstData = temperature.find(value => value.name === unitFirst)
  const unitSecondData = temperature.find(value => value.name === unitSecond)

  return (
    <div className="max-w-lg">
      <Heading2>Convert temperature</Heading2>
      <UnitSelect
        unit={[
          unitFirst,
          newUnitFirst => {
            setUnitFirst(newUnitFirst)
            recalculateFromValueFirst(valueFirst, newUnitFirst, unitSecond)
          },
        ]}
      />
      <Input
        type="number"
        value={valueFirst}
        onChange={val => recalculateFromValueFirst(val, unitFirst, unitSecond)}
      >
        {unitFirstData?.display} ({unitFirstData?.symbol})
      </Input>
      <UnitSelect
        unit={[
          unitSecond,
          newUnitSecond => {
            setUnitSecond(newUnitSecond)
            recalculateFromValueFirst(valueFirst, unitFirst, newUnitSecond)
          },
        ]}
      />
      <Input
        type="number"
        value={valueSecond}
        onChange={val => recalculateFromValueSecond(val, unitSecond, unitFirst)}
      >
        {unitSecondData?.display} ({unitSecondData?.symbol})
      </Input>
    </div>
  )
}

export default TemperatureConverter
