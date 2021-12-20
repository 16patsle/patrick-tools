import React, { useCallback, useRef, useState } from 'react'
import type CanvgType from 'canvg'
import { Heading2 } from '../components/Heading2'
import TextArea from '../components/TextArea'
import { AnchorButton, Button } from '../components/Button'
import { ErrorNotice } from '../components/Notice'

let Canvg: Promise<void> | typeof CanvgType

export const SvgToPngConverter = () => {
  const [svg, setSvg] = useState('')
  const [pngUrl, setPngUrl] = useState('')
  const [error, setError] = useState('')
  const canvas = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(false)

  if (svg.length > 0 && !Canvg) {
    setLoading(true)
    Canvg = import('canvg').then(({ default: C }) => {
      setLoading(false)
      Canvg = C
    })
  }

  const renderSvg = useCallback(async () => {
    console.log('renderSvg')
    try {
      if (Canvg instanceof Promise) {
        return
      }
      const ctx = canvas.current!.getContext('2d')!
      const v = Canvg.fromString(ctx, svg)
      await v.render()

      canvas.current.toBlob(blob => {
        setPngUrl(URL.createObjectURL(blob))
      })
    } catch (e) {
      setError(e.message)
    }
  }, [svg, canvas])

  return (
    <div className="max-w-md">
      <Heading2>Convert SVG to PNG</Heading2>
      <TextArea value={svg} onChange={setSvg}>
        SVG
      </TextArea>
      {loading && <p>Loading...</p>}
      {error && <ErrorNotice>{error}</ErrorNotice>}
      <Button
        onClick={renderSvg}
        disabled={svg.length === 0 || loading || !canvas.current}
      >
        Render
      </Button>
      <canvas ref={canvas} hidden />
      {pngUrl && (
        <div className="shadow-md border-gray-200 border-2 rounded-md p-2 pb-0 my-3 flex items-center flex-col">
          <img src={pngUrl} alt="The generated PNG image" />
          <AnchorButton href={pngUrl} download>Download</AnchorButton>
        </div>
      )}
    </div>
  )
}
