import { type SwcWorkerData } from './transform'
import { listenFromWorker } from '../listenFromWorker'
import initSwc, { transform } from '@swc/wasm-web'

let initialized = false

listenFromWorker<SwcWorkerData, string>(
  'transform',
  async ({ code, parser, jsx, minify }, reportStatus) => {
    if (!initialized) {
      reportStatus('Initializing swc...')
      await initSwc()
      initialized = true
    }

    reportStatus('Transforming code...')
    const result = await transform(code, {
      jsc: {
        parser: {
          syntax: parser,
          jsx,
        },
      },
      minify,
    })

    return result.code
  }
)
