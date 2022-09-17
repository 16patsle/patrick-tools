import { type EsbuildWorkerData } from './esbuildTransform'
import { listenFromWorker } from './listenFromWorker'
import * as esbuild from 'esbuild-wasm/esm/browser'

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
