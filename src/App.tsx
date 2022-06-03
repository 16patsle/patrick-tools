import AngleConverter from './calculators/AngleConverter'
import BinaryDecimalConverter from './calculators/BinaryDecimalConverter'
import BinaryTextConverter from './calculators/BinaryTextConverter'
import CentimeterInchConverter from './calculators/CentimeterInchConverter'
import WeightConverter from './calculators/WeightConverter'
import KiloPoundConverter from './calculators/KiloPoundConverter'
import LengthConverter from './calculators/LengthConverter'
import PercentCalculation from './calculators/PercentCalculation'
import RomanNumeralConverter from './calculators/RomanNumeralConverter'
import { SvgToPngConverter } from './calculators/SvgToPngConverter'
import TemperatureConverter from './calculators/TemperatureConverter'

const App = () => {
  return (
    <div className="m-2">
      <h1 className="text-3xl mt-1 mb-2 text-gray-800">Patrick's Tools</h1>
      <BinaryDecimalConverter />
      <BinaryTextConverter />
      <RomanNumeralConverter />
      <WeightConverter />
      <KiloPoundConverter />
      <LengthConverter />
      <CentimeterInchConverter />
      <TemperatureConverter />
      <AngleConverter />
      <PercentCalculation />
      <SvgToPngConverter />
    </div>
  )
}

export default App
