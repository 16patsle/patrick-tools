import React from 'react'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import convertCentimeterToInch from '../utils/convertCentimeterToInch'
import convertInchToCentimeter from '../utils/convertInchToCentimeter'
import { useConverterState } from '../utils/useConverterState'

const CentimeterInchConverter = () => {
  const [cm, setCm, recalculateFromCm] = useConverterState('', (cm): void =>
    setInch(convertCentimeterToInch(cm))
  )
  const [inch, setInch, recalculateFromInch] = useConverterState(
    '',
    (inch): void => setCm(convertInchToCentimeter(inch))
  )

  return (
    <div className="max-w-md">
      <Heading2>Convert centimeters to and from inches</Heading2>
      <Input type="number" min="0" value={cm} onChange={recalculateFromCm}>
        Centimeters (cm)
      </Input>
      <Input type="number" min="0" value={inch} onChange={recalculateFromInch}>
        Inches (in)
      </Input>
    </div>
  )
}

export default CentimeterInchConverter
