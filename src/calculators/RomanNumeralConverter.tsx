import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'
import convertDecimalToRoman from '../utils/convertDecimalToRoman'
import convertRomanToDecimal from '../utils/convertRomanToDecimal'
import { useConverterState } from '../utils/useConverterState'

const RomanNumeralConverter = () => {
  const [decimal, setDecimal, recalculateFromDecimal] = useConverterState(
    '',
    (d): void => setRoman(convertDecimalToRoman(d))
  )
  const [roman, setRoman, recalculateFromRoman] = useConverterState(
    '',
    (r): void => setDecimal(String(convertRomanToDecimal(r)))
  )

  return (
    <div className="max-w-md">
      <Heading2>Convert numbers to and from Roman numerals</Heading2>
      <Input
        type="number"
        min="1"
        value={decimal}
        onChange={recalculateFromDecimal}
        onKeyPress={e => {
          if (e.key === '.' || e.key === ',') {
            e.preventDefault()
          }
        }}
      >
        Decimal
      </Input>
      <Input
        pattern="[IVXLCDM]+"
        value={roman}
        onChange={val => recalculateFromRoman(val.toUpperCase())}
        onKeyPress={e => {
          if (
            !['I', 'V', 'X', 'L', 'C', 'D', 'M'].includes(e.key.toUpperCase())
          ) {
            e.preventDefault()
          }
        }}
      >
        Roman
      </Input>
    </div>
  )
}

export default RomanNumeralConverter
