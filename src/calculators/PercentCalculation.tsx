import { useState } from 'react'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import { calculateGrowthFactor } from '../utils/calculateGrowthFactor'

const PercentCalculation = () => {
  const [newValue, setNewValue] = useState('1')
  const [oldValue, setOldValue] = useState('1')
  const [growthFactor, setGrowthFactor] = useState('1')

  return (
    <div className="max-w-md">
      <Heading2>
        Calculate growth factor and percent increase/decrease
      </Heading2>
      <Input
        type="number"
        value={newValue}
        onChange={val => {
          setNewValue(val)
          setGrowthFactor(calculateGrowthFactor(oldValue, val) || '0')
        }}
      >
        New Value
      </Input>
      <Input
        type="number"
        value={oldValue}
        onChange={val => {
          setOldValue(val)
          setGrowthFactor(calculateGrowthFactor(val, newValue) || '0')
        }}
      >
        Old value
      </Input>
      <Input type="number" value={growthFactor} disabled>
        Growth Factor
      </Input>
    </div>
  )
}

export default PercentCalculation
