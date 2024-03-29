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

if (typeof process !== 'undefined' && process.env.TEST) {
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

let initialized = false

listenFromWorker<EsbuildWorkerData, string>(
  'transform',
  async ({ code, loader, minify }, reportStatus) => {
    if (!initialized) {
      reportStatus('Initializing esbuild...')
      await esbuild.initialize({
        wasmURL,
        worker: false,
      })
      initialized = true
    }

    reportStatus('Transforming code...')
    const result = await esbuild.transform(code, {
      loader,
      minify,
    })

    if (loader === 'json') {
      // For JSON, esbuild exports it as JavaScript. We don't want that
      return result.code.replace(/^module.exports=/, '')
    }

    return result.code
  }
)
