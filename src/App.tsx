import AngleConverter from './calculators/AngleConverter'
import BinaryDecimalConverter from './calculators/BinaryDecimalConverter'
import BinaryTextConverter from './calculators/BinaryTextConverter'
import WeightConverter from './calculators/WeightConverter'
import LengthConverter from './calculators/LengthConverter'
import PercentCalculation from './calculators/PercentCalculation'
import RomanNumeralConverter from './calculators/RomanNumeralConverter'
import { SvgToPngConverter } from './calculators/SvgToPngConverter'
import TemperatureConverter from './calculators/TemperatureConverter'
import { Nav } from './components/Nav'

const App = () => {
  return (
    <div className="max-w-screen-lg">
      <h1 className="text-3xl m-3 mt-2 mb-2 text-gray-800">Patrick's Tools</h1>
      <Nav />
      <div className="ml-3 flex flex-col gap-2">
        <BinaryDecimalConverter />
        <BinaryTextConverter />
        <RomanNumeralConverter />
        <WeightConverter />
        <LengthConverter />
        <TemperatureConverter />
        <AngleConverter />
        <PercentCalculation />
        <SvgToPngConverter />
      </div>
    </div>
  )
}

export default App
