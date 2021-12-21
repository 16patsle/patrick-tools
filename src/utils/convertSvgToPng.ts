export const convertSvgToPng = async (
  svg: string,
  canvas: HTMLCanvasElement
): Promise<string> => {
  const { default: Canvg } = await import('canvg')
  const ctx = canvas.getContext('2d')
  const v = Canvg.fromString(ctx, svg)
  await v.render()

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) {
        reject(new Error('Could not convert to image'))
        return
      }
      resolve(URL.createObjectURL(blob))
    }, 'image/png')
  })
}
