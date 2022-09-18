import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Heading2 } from '../components/Heading2'
import { ErrorNotice } from '../components/Notice'
import { PackageVersionNumber } from '../components/PackageVersionNumber'
import TextArea from '../components/TextArea'
import { minifyCss } from '../utils/tools/lightningcss/transform'
import lightningcssPackageJson from 'lightningcss-wasm/package.json'

export const CssMinifier = () => {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [isMinifying, setIsMinifying] = useState(false)

  const minifyCode = useCallback(async () => {
    try {
      setIsMinifying(true)
      setError('')

      setCode(await minifyCss(code, setStatus))
    } catch (e) {
      console.error(e)
      if (e instanceof Error) {
        setError(e.message)
      } else if (typeof e === 'string') {
        setError(e)
      } else {
        setError('Unknown error')
      }
    } finally {
      setIsMinifying(false)
    }
  }, [code])

  return (
    <div className="max-w-md">
      <Heading2>Minify CSS using Lightning CSS</Heading2>
      <TextArea value={code} onChange={setCode} className="font-mono">
        Code
      </TextArea>
      {isMinifying && status && <p>{status}</p>}
      {error && (
        <ErrorNotice>
          <span className="font-semibold">Error:</span> {error}
        </ErrorNotice>
      )}
      <Button onClick={minifyCode} disabled={isMinifying || code.length === 0}>
        Minify
      </Button>
      <PackageVersionNumber packageJson={lightningcssPackageJson} />
    </div>
  )
}
