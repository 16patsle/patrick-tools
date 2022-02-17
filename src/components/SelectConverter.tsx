import { useState } from 'react'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import { useConverterState } from '../utils/useConverterState'
import { Select } from '../components/Select'
import Big, { BigSource } from 'big.js'

type SelectOptions = {
  name: string
  display: string
  symbol: string
}[]

const UnitSelect = ({
  unit: [value, setValue],
  options,
}: {
  unit: [string, (value: string) => void]
  options: SelectOptions
}) => {
  return (
    <Select value={value} onChange={setValue}>
      {options.map(({ name, display, symbol }) => (
        <option key={name} value={name}>
          {display} ({symbol})
        </option>
      ))}
    </Select>
  )
}

export const SelectConverter = <T extends string>({
  convertFunction,
  dp = 1,
  options,
  initialUnits: [initialFirstUnit, initialSecondUnit],
  title,
}: {
  convertFunction(
    value: BigSource,
    from: T,
    to: T,
    dp?: number | false
  ): false | Big
  dp?: number | false
  options: SelectOptions
  initialUnits: [T, T]
  title: string
}) => {
  const [valueFirst, setValueFirst, recalculateFromValueFirst] =
    useConverterState(new Big(0), (value, from, to): void =>
      setValueSecond(convertFunction(value, from, to, dp))
    )
  const [valueSecond, setValueSecond, recalculateFromValueSecond] =
    useConverterState(new Big(0), (value, from, to): void =>
      setValueFirst(convertFunction(value, from, to, dp))
    )

  const [unitFirst, setUnitFirst] = useState(initialFirstUnit)
  const [unitSecond, setUnitSecond] = useState(initialSecondUnit)
  const unitFirstData = options.find(value => value.name === unitFirst)
  const unitSecondData = options.find(value => value.name === unitSecond)

  return (
    <div className="max-w-lg">
      <Heading2>{title}</Heading2>
      <UnitSelect
        unit={[
          unitFirst,
          newUnitFirst => {
            setUnitFirst(newUnitFirst as T)
            recalculateFromValueFirst(valueFirst, newUnitFirst, unitSecond)
          },
        ]}
        options={options}
      />
      <Input
        type="number"
        value={valueFirst}
        onChange={val =>
          recalculateFromValueFirst(new Big(val || 0), unitFirst, unitSecond)
        }
      >
        {unitFirstData?.display} ({unitFirstData?.symbol})
      </Input>
      <UnitSelect
        unit={[
          unitSecond,
          newUnitSecond => {
            setUnitSecond(newUnitSecond as T)
            recalculateFromValueFirst(valueFirst, unitFirst, newUnitSecond)
          },
        ]}
        options={options}
      />
      <Input
        type="number"
        value={valueSecond}
        onChange={val =>
          recalculateFromValueSecond(new Big(val || 0), unitSecond, unitFirst)
        }
      >
        {unitSecondData?.display} ({unitSecondData?.symbol})
      </Input>
    </div>
  )
}
