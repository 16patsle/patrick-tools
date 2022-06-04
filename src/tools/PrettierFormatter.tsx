import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Label } from '../components/Label'
import { ErrorNotice } from '../components/Notice'
import { Select } from '../components/Select'
import TextArea from '../components/TextArea'
import { parsers, prettierFormat } from '../utils/tools/prettierFormat'

export const PrettierFormatter = () => {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('babel')
  const [error, setError] = useState('')
  const [isFormatting, setIsFormatting] = useState(false)

  const formatCode = useCallback(async () => {
    try {
      setIsFormatting(true)
      setError('')

      setCode(await prettierFormat(code))
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else if (typeof e === 'string') {
        setError(e)
      } else {
        setError('Unknown error')
      }
    } finally {
      setIsFormatting(false)
    }
  }, [code])

  return (
    <div className="max-w-md">
      <TextArea value={code} onChange={setCode}>
        Code
      </TextArea>
      <Label text="Language">
        <Select
          value={language}
          onChange={value => setLanguage(value)}
        >
          {parsers.map((parser) => (
              <option key={parser.id} value={parser.id}>
                {parser.name}
              </option>
            ))}
        </Select>
      </Label>
      {isFormatting && <p>Converting...</p>}
      {error && (
        <ErrorNotice>
          <span className="font-semibold">Error:</span> {error}
        </ErrorNotice>
      )}
      <Button onClick={formatCode} disabled={isFormatting}>
        Render
      </Button>
    </div>
  )
}
