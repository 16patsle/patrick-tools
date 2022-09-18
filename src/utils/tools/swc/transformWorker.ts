import { type SwcWorkerData } from './transform'
import { listenFromWorker } from '../listenFromWorker'
import initSwc, { transform } from '@swc/wasm-web'

let initialized = false

listenFromWorker<SwcWorkerData, string>(
  'transform',
  async (data, reportStatus) => {
    if (!initialized) {
      reportStatus('Initializing swc...')
      await initSwc()
      initialized = true
    }

    reportStatus('Transforming code...')
    const result = await transform(data.code, {
      jsc: {
        parser: {
          syntax: data.parser,
          jsx: data.jsx
        },
      },
      minify: true,
    })

    return result.code
  }
)
