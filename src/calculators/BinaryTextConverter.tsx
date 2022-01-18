import { useState } from 'react'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'
import { Heading2 } from '../components/Heading2'
import convertASCIIBinaryToText from '../utils/convertASCIIBinaryToText'
import convertTextToASCIIBinary from '../utils/convertTextToASCIIBinary'
import { useConverterState } from '../utils/useConverterState'

const BinaryTextConverter = () => {
  const [binary, setBinary, recalculateFromBinary] = useConverterState(
    '',
    (binary): void => setText(convertASCIIBinaryToText(binary))
  )
  const [text, setText, recalculateFromText] = useConverterState(
    '',
    (text, spaces): void => setBinary(convertTextToASCIIBinary(text, spaces))
  )
  const [charset, setCharset] = useState('ascii')
  const [spaces, setSpaces] = useState(true)

  return (
    <div className="max-w-md">
      <Heading2>Convert text to and from binary</Heading2>
      <Input
        pattern="[01 ]+"
        value={binary}
        onChange={recalculateFromBinary}
        onKeyPress={e => {
          if (e.key !== '1' && e.key !== '0' && e.key !== ' ') {
            e.preventDefault()
          }
        }}
      >
        Binary
      </Input>
      <Input
        value={text}
        onChange={val => recalculateFromText(val, spaces)}
        onKeyPress={e => {
          if (charset === 'ascii' && e.key.charCodeAt(0) > 255) {
            e.preventDefault()
          }
        }}
      >
        Text
      </Input>
      <Checkbox
        checked={spaces}
        onChange={val => {
          setSpaces(val)
          recalculateFromText(text, val)
        }}
      >
        Use space separator
      </Checkbox>
      <Radio
        name="binary_text_charset"
        value="ascii"
        checkedValue={charset}
        onChange={setCharset}
      >
        ASCII
      </Radio>
      <Radio
        name="binary_text_charset"
        value="unicode"
        checkedValue={charset}
        onChange={setCharset}
      >
        Unicode (UTF-16)
      </Radio>
    </div>
  )
}

export default BinaryTextConverter
