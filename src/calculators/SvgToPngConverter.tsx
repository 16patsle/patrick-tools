import { useCallback, useEffect, useRef, useState } from 'react'
import { Heading2 } from '../components/Heading2'
import TextArea from '../components/TextArea'
import { AnchorButton, Button } from '../components/Button'
import { ErrorNotice } from '../components/Notice'
import Radio from '../components/Radio'
import {
  convertSvgToPng,
  getSupportedTypes,
  possibleTypes,
  type ImageType,
} from '../utils/convertSvgToPng'
import { FileInput } from '../components/FileInput'
import { Select } from '../components/Select'
import { Label } from '../components/Label'
import { PackageVersionNumber } from '../components/PackageVersionNumber'
import canvgPackageJson from '../../node_modules/canvg/package.json'

export const SvgToPngConverter = () => {
  const [svg, setSvg] = useState('')
  const [pngUrl, setPngUrl] = useState('')
  const [error, setError] = useState('')
  const canvas = useRef<HTMLCanvasElement>(null)
  const [converting, setConverting] = useState(false)
  const [inputType, setInputType] = useState<'text' | 'file'>('text')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [supportedImageTypes, setSupportedImageTypes] = useState<ImageType[]>([
    'image/png',
  ])
  const [outputType, setOutputType] = useState<ImageType>('image/png')

  const renderSvg = useCallback(async () => {
    try {
      if (!canvas.current) {
        throw new Error('Canvas is not available')
      }
      let content = svg
      if (inputType === 'file') {
        if (!selectedFile) {
          throw new Error('Could not read file content')
        }
        content = await selectedFile.text()
      }

      setConverting(true)
      setPngUrl(await convertSvgToPng(content, canvas.current, outputType))
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else if (typeof e === 'string') {
        setError(e)
      } else {
        setError('Unknown error')
      }
    } finally {
      setConverting(false)
    }
  }, [svg, canvas, selectedFile, inputType, outputType])

  useEffect(() => {
    const getTypes = async () => {
      if (canvas.current) {
        const types = await getSupportedTypes(canvas.current)
        setSupportedImageTypes(types)
      }
    }
    getTypes().catch(console.error)
  }, [canvas])

  const updateInputType = (type: string) => {
    setInputType(type === 'file' ? 'file' : 'text')
    setPngUrl('')
    setError('')
    setConverting(false)
    setSelectedFile(null)
  }

  const canConvert = inputType === 'text' ? svg.length === 0 : !selectedFile

  return (
    <div className="max-w-md">
      <Heading2>Convert SVG to {possibleTypes[outputType]}</Heading2>
      <Radio
        name="svg_png_input_type"
        value="text"
        checkedValue={inputType}
        onChange={updateInputType}
      >
        Input text
      </Radio>
      <Radio
        name="svg_png_input_type"
        value="file"
        checkedValue={inputType}
        onChange={updateInputType}
      >
        Upload file
      </Radio>
      {inputType === 'text' ? (
        <TextArea value={svg} onChange={setSvg} className="font-mono">
          SVG
        </TextArea>
      ) : (
        <FileInput accept="image/svg+xml" onChange={setSelectedFile}>
          Select File
        </FileInput>
      )}
      <Label text="File type">
        <Select
          value={outputType}
          onChange={value => setOutputType(value as ImageType)}
        >
          {Object.entries(possibleTypes).map(([key, value]) => {
            const supported = supportedImageTypes.includes(key as ImageType)
            return (
              <option key={key} value={key} disabled={!supported}>
                {value}
                {!supported && ' (not supported)'}
              </option>
            )
          })}
        </Select>
      </Label>

      {converting && <p>Converting...</p>}
      {error && (
        <ErrorNotice>
          <span className="font-semibold">Error:</span> {error}
        </ErrorNotice>
      )}
      <Button
        onClick={renderSvg}
        disabled={canConvert || converting || !canvas.current}
      >
        Render
      </Button>
      <canvas ref={canvas} hidden />
      {pngUrl && (
        <div className="my-3 flex flex-col items-center rounded-md border-2 border-gray-200 p-2 pb-0 shadow-md">
          <img src={pngUrl} alt="The generated PNG image" />
          <AnchorButton href={pngUrl} download>
            Download
          </AnchorButton>
        </div>
      )}
      <PackageVersionNumber packageJson={canvgPackageJson} />
    </div>
  )
}
