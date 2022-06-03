import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
    <BrowserRouter>
      <div className="max-w-screen-lg">
        <h1 className="text-3xl m-3 mt-2 mb-2 text-gray-800">
          Patrick's Tools
        </h1>
        <Nav />
        <div className="ml-3 flex flex-col gap-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BinaryDecimalConverter />
                  <BinaryTextConverter />
                  <RomanNumeralConverter />
                  <PercentCalculation />
                  <SvgToPngConverter />
                </>
              }
            />
            <Route path="/units/weight" element={<WeightConverter />} />
            <Route path="/units/length" element={<LengthConverter />} />
            <Route
              path="/units/temperature"
              element={<TemperatureConverter />}
            />
            <Route path="/units/angle" element={<AngleConverter />} />
            <Route
              path="/all"
              element={
                <>
                  <BinaryDecimalConverter />
                  <BinaryTextConverter />
                  <WeightConverter />
                  <LengthConverter />
                  <TemperatureConverter />
                  <AngleConverter />
                  <RomanNumeralConverter />
                  <PercentCalculation />
                  <SvgToPngConverter />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
