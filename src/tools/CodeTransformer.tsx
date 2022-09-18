import { useCallback, useState } from 'react'
import { Button } from '../components/Button'
import { Label } from '../components/Label'
import { ErrorNotice } from '../components/Notice'
import { Select } from '../components/Select'
import TextArea from '../components/TextArea'
import { Heading2 } from '../components/Heading2'
import { esbuildTransform } from '../utils/tools/esbuild/transform'
import { loaders } from '../utils/tools/esbuild/loaders'
import {
  type PackageJson,
  PackageVersionNumber,
} from '../components/PackageVersionNumber'
import { minifyCss } from '../utils/tools/lightningcss/transform'
import { swcTransform } from '../utils/tools/swc/transform'
import { terserMinify } from '../utils/tools/terser/transform'
import esbuildPackageJson from 'esbuild-wasm/package.json'
import lightningcssPackageJson from 'lightningcss-wasm/package.json'
import swcPackageJson from '@swc/wasm-web/package.json'
import terserPackageJson from 'terser/package.json'
import Checkbox from '../components/Checkbox'

const map: Record<LanguageName, ToolName[]> = {
  js: ['esbuild', 'swc', 'terser'],
  ts: ['esbuild', 'swc'],
  css: ['lightningcss', 'esbuild'],
  json: ['esbuild'],
}

export type LanguageName = 'js' | 'ts' | 'css' | 'json'
type ToolName = 'esbuild' | 'lightningcss' | 'swc' | 'terser'

const languages = [
  {
    id: 'js',
    name: 'JavaScript',
    extensions: ['.js', '.cjs', '.mjs'],
  },
  {
    id: 'ts',
    name: 'TypeScript',
    extensions: ['.ts', '.mts', '.cts'],
  },
  {
    id: 'css',
    name: 'CSS',
    extensions: ['.css'],
  },
  {
    id: 'json',
    name: 'JSON',
    extensions: ['.json'],
  },
]

const tools: {
  id: ToolName
  name: string
  packageJson: PackageJson
  supports?: ('jsx' | 'minify')[]
}[] = [
  {
    id: 'esbuild',
    name: 'esbuild',
    packageJson: esbuildPackageJson,
    supports: ['jsx', 'minify'],
  },
  {
    id: 'lightningcss',
    name: 'Lightning CSS',
    packageJson: lightningcssPackageJson,
  },
  {
    id: 'swc',
    name: 'swc',
    packageJson: swcPackageJson,
    supports: ['jsx', 'minify'],
  },
  {
    id: 'terser',
    name: 'terser',
    packageJson: terserPackageJson,
  },
]

type Options = {
  jsx?: boolean
  minify?: boolean
}

export const CodeTransformer = () => {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState<LanguageName>('js')
  const [tool, setTool] = useState<ToolName>('esbuild')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [options, setOptions] = useState<Options>({
    jsx: false,
    minify: false,
  })
  const [isTransforming, setIsTransforming] = useState(false)

  const transformCode = useCallback(async () => {
    try {
      setIsTransforming(true)
      setError('')

      let result = code

      switch (tool) {
        case 'esbuild': {
          result = await esbuildTransform(
            code,
            { language, ...options },
            setStatus
          )
          break
        }
        case 'lightningcss': {
          result = await minifyCss(code, setStatus)
          break
        }
        case 'swc': {
          result = await swcTransform(code, { language, ...options }, setStatus)
          break
        }
        case 'terser': {
          result = await terserMinify(code, setStatus)
          break
        }
        default: {
          throw Error('No tool selected')
        }
      }

      setCode(result)
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
  }, [code, language, tool, options])

  const currentLangName = loaders.find(loader => loader.id === language)?.name
  const currentTool = tools.find(t => t.id === tool)

  return (
    <div className="max-w-md">
      <Heading2>
        Transform {currentLangName} using {currentTool?.name}
      </Heading2>
      <TextArea value={code} onChange={setCode} className="font-mono">
        Code
      </TextArea>
      <Label text="Language">
        <Select
          value={language}
          onChange={value => {
            const compatibleTools = tools.filter(tool =>
              map[value as LanguageName].includes(tool.id)
            )
            setLanguage(value as LanguageName)
            if (!compatibleTools.find(t => t.id === tool)) {
              setTool(compatibleTools[0].id)
            }
            setError('')
          }}
        >
          {languages.map(language => (
            <option key={language.id} value={language.id}>
              {language.name}
            </option>
          ))}
        </Select>
      </Label>
      <Label text="Tool">
        <Select
          value={tool}
          onChange={value => {
            setTool(value as ToolName)
            setError('')
          }}
        >
          {tools
            .filter(tool => map[language].includes(tool.id))
            .map(tool => (
              <option key={tool.id} value={tool.id}>
                {tool.name}
              </option>
            ))}
        </Select>
      </Label>
      {currentTool?.supports?.includes('jsx') && (
        <Checkbox
          checked={options.jsx}
          onChange={val => setOptions({ ...options, jsx: val })}
        >
          JSX
        </Checkbox>
      )}
      {currentTool?.supports?.includes('minify') && (
        <Checkbox
          checked={options.minify}
          onChange={val => setOptions({ ...options, minify: val })}
        >
          Minify
        </Checkbox>
      )}
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
        Transform
      </Button>
      {currentTool && (
        <PackageVersionNumber packageJson={currentTool.packageJson} />
      )}
    </div>
  )
}
