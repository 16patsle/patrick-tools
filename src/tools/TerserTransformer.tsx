import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { ErrorNotice } from '../components/Notice'
import TextArea from '../components/TextArea'
import { Heading2 } from '../components/Heading2'
import { terserMinify } from '../utils/tools/terser/transform'
import { PackageVersionNumber } from '../components/PackageVersionNumber'
import terserPackageJson from 'terser/package.json'

export const TerserTransformer = () => {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [isTransforming, setIsTransforming] = useState(false)

  const transformCode = useCallback(async () => {
    try {
      setIsTransforming(true)
      setError('')

      setCode(await terserMinify(code, setStatus))
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
  }, [code])

  return (
    <div className="max-w-md">
      <Heading2>Minify JavaScript using terser</Heading2>
      <TextArea value={code} onChange={setCode} className="font-mono">
        Code
      </TextArea>
      {isTransforming && status && <p>{status}</p>}
      {error && (
        <ErrorNotice>
          <span className="font-semibold">Error:</span> {error}
        </ErrorNotice>
      )}
      <Button
        onClick={transformCode}
        disabled={isTransforming || code.length === 0}
      >
        Minify
      </Button>
      <PackageVersionNumber packageJson={terserPackageJson} />
    </div>
  )
}
