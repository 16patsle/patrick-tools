import init, { transform } from 'lightningcss-wasm'
import { type LightningcssWorkerData } from './transform'
import { listenFromWorker } from '../listenFromWorker'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

let initialized = false

listenFromWorker<LightningcssWorkerData, string>(
  'minify',
  async (data, reportStatus) => {
    if (!initialized) {
      reportStatus('Initializing lightningcss...')
      await init()
      initialized = true
    }

    reportStatus('Minifying CSS...')
    const result = transform({
      filename: 'file.css',
      code: encoder.encode(data.code),
      minify: true,
    })
    return decoder.decode(result.code)
  }
)
