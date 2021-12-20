import React, { useCallback, useRef, useState } from 'react'
import type CanvgType from 'canvg'
import Input from '../components/Input'
import { Heading2 } from '../components/Heading2'

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
      <Input type="text" value={svg} onChange={setSvg}>
        SVG
      </Input>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button onClick={renderSvg} disabled={svg.length === 0 || loading || !canvas.current}>
        Render
      </button>
      <canvas ref={canvas} />
      {pngUrl && <img src={pngUrl} />}
    </div>
  )
}