import React, { useCallback, useRef, useState } from 'react'
import { Heading2 } from '../components/Heading2'
import TextArea from '../components/TextArea'
import { AnchorButton, Button } from '../components/Button'
import { ErrorNotice } from '../components/Notice'
import Radio from '../components/Radio'
import { convertSvgToPng } from '../utils/convertSvgToPng'

export const SvgToPngConverter = () => {
  const [svg, setSvg] = useState('')
  const [pngUrl, setPngUrl] = useState('')
  const [error, setError] = useState('')
  const canvas = useRef<HTMLCanvasElement>(null)
  const [converting, setConverting] = useState(false)
  const [inputType, setInputType] = useState<'text' | 'file'>('text')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const renderSvg = useCallback(async () => {
    try {
      if (!canvas.current) {
        return
      }
      setConverting(true)
      setPngUrl(await convertSvgToPng(svg, canvas.current))
      setConverting(false)
    } catch (e) {
      if(e instanceof Error) {
      setError(e.message)
      } else if (typeof e === 'string') {
        setError(e)
      } else {
        setError('Unknown error')
      }
    }
  }, [svg, canvas])

  const updateInputType = (type: string) =>
    setInputType(type === 'file' ? 'file' : 'text')

  return (
    <div className="max-w-md">
      <Heading2>Convert SVG to PNG</Heading2>
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
        <TextArea value={svg} onChange={setSvg}>
          SVG
        </TextArea>
      ) : (
        <input
          type="file"
          accept="image/svg+xml"
          onChange={e => setSelectedFile(e.target.files[0])}
        />
      )}

      {converting && <p>Converting...</p>}
      {error && (
        <ErrorNotice>
          <span className="font-semibold">Error:</span> {error}
        </ErrorNotice>
      )}
      <Button
        onClick={renderSvg}
        disabled={svg.length === 0 || converting || !canvas.current}
      >
        Render
      </Button>
      <canvas ref={canvas} hidden />
      {pngUrl && (
        <div className="shadow-md border-gray-200 border-2 rounded-md p-2 pb-0 my-3 flex items-center flex-col">
          <img src={pngUrl} alt="The generated PNG image" />
          <AnchorButton href={pngUrl} download>
            Download
          </AnchorButton>
        </div>
      )}
    </div>
  )
}
