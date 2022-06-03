import { convertWeight } from '../utils/convertWeight'
import { SelectConverter } from '../components/SelectConverter'

import { weight } from '../data/weight'

const WeightConverter = () => {
  return (
    <SelectConverter
      convertFunction={convertWeight}
      dp={2}
      options={weight}
      initialUnits={['kilogram', 'pound']}
      title="Convert length"
    />
  )
}

export default WeightConverter
