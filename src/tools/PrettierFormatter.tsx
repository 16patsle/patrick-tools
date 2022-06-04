import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { ErrorNotice } from '../components/Notice'
import TextArea from '../components/TextArea'
import { prettierFormat } from '../utils/tools/prettierFormat'

export const PrettierFormatter = () => {
  const [code, setCode] = useState('')
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
