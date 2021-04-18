import React, { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'
import Radio from '../components/Radio'
import Heading2 from '../components/Heading2'
import convertASCIIBinaryToText from '../utils/convertASCIIBinaryToText'
import convertTextToASCIIBinary from '../utils/convertTextToASCIIBinary'

let delayedSetBinary
let delayedSetText

const BinaryTextConverter = () => {
  const [binary, setBinary] = useState('')
  const [text, setText] = useState('')
  const [charset, setCharset] = useState('ascii')
  const [spaces, setSpaces] = useState(true)

  if (!delayedSetBinary) {
    delayedSetBinary = debounce(setBinary, 200)
  }
  if (!delayedSetText) {
    delayedSetText = debounce(setText, 200)
  }

  useEffect(() => {
    const newBinary = convertTextToASCIIBinary(text, spaces)
    if (newBinary !== false) {
      delayedSetBinary(newBinary)
    }

    return delayedSetBinary.cancel
  }, [text, spaces])

  useEffect(() => {
    const newText = convertASCIIBinaryToText(binary)
    if (newText !== false) {
      delayedSetText(String(newText))
    }

    return delayedSetBinary.cancel
  }, [binary])

  return (
    <div className="max-w-md">
      <Heading2>Convert text to and from binary</Heading2>
      <Input
        pattern="[01 ]+"
        value={binary}
        onChange={setBinary}
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
        onChange={setText}
        onKeyPress={e => {
          if (charset === 'ascii' && e.key.charCodeAt(0) > 255) {
            e.preventDefault()
          }
        }}
      >
        Text
      </Input>
      <Checkbox checked={spaces} onChange={setSpaces}>
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
