import { convertLength } from '../utils/convertLength'
import { SelectConverter } from '../components/SelectConverter'

import { length } from '../data/length'

const LengthConverter = () => {
  return (
    <SelectConverter
      convertFunction={convertLength}
      dp={2}
      options={length}
      initialUnits={['centimeter', 'inch']}
      title="Convert length"
    />
  )
}

export default LengthConverter
