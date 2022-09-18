import { type SwcWorkerData } from './transform'
import { listenFromWorker } from '../listenFromWorker'
import initSwc, { transform } from '@swc/wasm-web'

let initialized = false

listenFromWorker<SwcWorkerData, string>('transform', async data => {
  if (!initialized) {
    await initSwc()
    initialized = true
  }

  const result = await transform(data.code, {
    jsc: {
      parser: {
        syntax: data.parser,
      },
    },
    minify: true,
  })

  return result.code
})
