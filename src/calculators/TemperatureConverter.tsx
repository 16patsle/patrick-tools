import { convertTemperature } from '../utils/convertTemperature'
import { SelectConverter } from '../components/SelectConverter'

import { temperature } from '../data/temperature'

const TemperatureConverter = () => {
  return (
    <SelectConverter
      convertFunction={convertTemperature}
      options={temperature}
      initialUnits={['celsius', 'fahrenheit']}
      title="Convert temperature"
    />
  )
}

export default TemperatureConverter
