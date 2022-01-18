import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import convertKiloToPound from '../utils/convertKiloToPound'
import convertPoundToKilo from '../utils/convertPoundToKilo'
import { useConverterState } from '../utils/useConverterState'

const KiloPoundConverter = () => {
  const [kilo, setKilo, recalculateFromKilo] = useConverterState(
    '',
    (kilo): void => setPound(convertKiloToPound(kilo))
  )
  const [pound, setPound, recalculateFromPound] = useConverterState(
    '',
    (pound): void => setKilo(convertPoundToKilo(pound))
  )

  return (
    <div className="max-w-md">
      <Heading2>Convert kilograms to and from pounds</Heading2>
      <Input type="number" min="0" value={kilo} onChange={recalculateFromKilo}>
        Kilograms (kg)
      </Input>
      <Input
        type="number"
        min="0"
        value={pound}
        onChange={recalculateFromPound}
      >
        Pounds (lb)
      </Input>
    </div>
  )
}

export default KiloPoundConverter
