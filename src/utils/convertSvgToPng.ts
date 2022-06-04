export const convertSvgToPng = async (
  svg: string,
  canvas: HTMLCanvasElement
): Promise<string> => {
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw new Error('Could not get canvas context')
  }
  const { Canvg } = await import('canvg')
  const v = Canvg.fromString(ctx, svg)
  await v.render()

  return URL.createObjectURL(await toBlob(canvas, 'image/png'))
}

const toBlob = (
  canvas: HTMLCanvasElement,
  type: string,
  quality?: number
): Promise<Blob> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      blob => {
        if (!blob) {
          reject(new Error('Could not convert to image'))
          return
        }
        console.log(blob.type)
        resolve(blob)
      },
      type,
      quality
    )
  })
