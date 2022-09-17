import init, { transform } from 'lightningcss-wasm'
import { type LightningcssWorkerData } from './lightningcssTransform'
import { listenFromWorker } from './listenFromWorker'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

listenFromWorker<LightningcssWorkerData, string>('minify', async data => {
  await init()

  const result = transform({
    filename: 'file.css',
    code: encoder.encode(data.code),
    minify: true,
  })
  return decoder.decode(result.code)
})
