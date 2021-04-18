import React from 'react'

import BinaryDecimalConverter from './calculators/BinaryDecimalConverter'
import BinaryTextConverter from './calculators/BinaryTextConverter'

const App = () => {
  return (
    <div className="m-2">
      <h1 className="text-3xl mt-1 mb-2 text-gray-800">Patrick's Tools</h1>
      <BinaryDecimalConverter />
      <BinaryTextConverter />
    </div>
  )
}

export default App
