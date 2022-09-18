import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Label } from '../components/Label'
import { ErrorNotice } from '../components/Notice'
import { Select } from '../components/Select'
import TextArea from '../components/TextArea'
import { Heading2 } from '../components/Heading2'
import {
  esbuildTransform,
  type LoaderName,
} from '../utils/tools/esbuildTransform'
import { loaders } from '../utils/tools/esbuildLoaders'
import { PackageVersionNumber } from '../components/PackageVersionNumber'
import esbuildPackageJson from 'esbuild-wasm/package.json'

export const EsbuildTransformer = () => {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState<LoaderName>('js')
  const [error, setError] = useState('')
  const [isTransforming, setIsTransforming] = useState(false)

  const transformCode = useCallback(async () => {
    try {
      setIsTransforming(true)
      setError('')

      setCode(await esbuildTransform(code, language))
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

  const currentLangName = loaders.find(loader => loader.id === language)?.name

  return (
    <div className="max-w-md">
      <Heading2>Transform {currentLangName} using esbuild</Heading2>
      <TextArea value={code} onChange={setCode} className="font-mono">
        Code
      </TextArea>
      <Label text="Language">
        <Select
          value={language}
          onChange={value => setLanguage(value as LoaderName)}
        >
          {loaders.map(loader => (
            <option key={loader.id} value={loader.id}>
              {loader.name}
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
      <Button
        onClick={transformCode}
        disabled={isTransforming || code.length === 0}
      >
        Transform
      </Button>
      <PackageVersionNumber packageJson={esbuildPackageJson} />
    </div>
  )
}
