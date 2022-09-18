import { type EsbuildWorkerData } from './transform'
import { listenFromWorker } from '../listenFromWorker'
import * as esbuild from 'esbuild-wasm/esm/browser'

// Polyfills for running in vitest. They apparently need to be here
import { cryptoPolyfill } from '../../../../tests/utils/cryptoPolyfill'
import { performancePolyfill } from '../../../../tests/utils/performancePolyfill'
import {
  FastTextDecoder,
  FastTextEncoder,
} from '../../../../tests/utils/textEncoderPolyfill'

if (process.env.TEST) {
  if (!self.crypto) {
    // @ts-expect-error
    self.crypto = cryptoPolyfill
  }
  if (!self.performance) {
    // @ts-expect-error
    self.performance = performancePolyfill
  }
  if (!self.TextEncoder) {
    // @ts-expect-error
    self.TextEncoder = FastTextEncoder
  }
  if (!self.TextDecoder) {
    self.TextDecoder = FastTextDecoder
  }
}

const wasmURL = new URL(
  '/node_modules/esbuild-wasm/esbuild.wasm',
  import.meta.url
).href

listenFromWorker<EsbuildWorkerData, string>('transform', async data => {
  await esbuild.initialize({
    wasmURL,
    worker: false,
  })

  const result = await esbuild.transform(data.code, {
    loader: data.loader,
    minify: true,
  })

  if (data.loader === 'json') {
    // For JSON, esbuild exports it as JavaScript. We don't want that
    return result.code.replace(/^module.exports=/, '')
  }

  return result.code
})
