import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Label } from '../components/Label'
import { ErrorNotice } from '../components/Notice'
import { Select } from '../components/Select'
import TextArea from '../components/TextArea'
import { type ParserName } from '../utils/tools/prettierFormat'
import { parsers } from '../utils/tools/parsers'
import { Heading2 } from '../components/Heading2'
import { esbuildTransform } from '../utils/tools/esbuildTransform'

export const EsbuildTransformer = () => {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState<ParserName>('babel')
  const [error, setError] = useState('')
  const [isTransforming, setIsTransforming] = useState(false)

  const transformCode = useCallback(async () => {
    try {
      setIsTransforming(true)
      setError('')

      setCode(await esbuildTransform(code))
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else if (typeof e === 'string') {
        setError(e)
      } else {
        setError('Unknown error')
      }
    } finally {
      setIsTransforming(false)
    }
  }, [code, language])

  const currentLangName = parsers.find(parser => parser.id === language)?.name

  return (
    <div className="max-w-md">
      <Heading2>Transform {currentLangName} using esbuild</Heading2>
      <TextArea value={code} onChange={setCode} className="font-mono">
        Code
      </TextArea>
      <Label text="Language">
        <Select
          value={language}
          onChange={value => setLanguage(value as ParserName)}
        >
          {parsers.map(parser => (
            <option key={parser.id} value={parser.id}>
              {parser.name}
            </option>
          ))}
        </Select>
      </Label>
      {isTransforming && <p>Transforming...</p>}
      {error && (
        <ErrorNotice>
          <span className="font-semibold">Error:</span> {error}
        </ErrorNotice>
      )}
      <Button onClick={transformCode} disabled={isTransforming || code.length === 0}>
        Format
      </Button>
    </div>
  )
}
