import { convertAngle } from '../utils/convertAngle'
import { SelectConverter } from '../components/SelectConverter'

import { angle } from '../data/angle'

const AngleConverter = () => {
  return (
    <SelectConverter
      convertFunction={convertAngle}
      dp={2}
      options={angle}
      initialUnits={['degree', 'radian']}
      title="Convert angles"
    />
  )
}

export default AngleConverter
