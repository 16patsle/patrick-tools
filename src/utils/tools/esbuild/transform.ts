import { runInWorker } from '../runInWorker'

export const esbuildTransform = (code: string, loader: LoaderName) =>
  runInWorker<EsbuildWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      loader,
    },
  })

export type EsbuildWorkerData = {
  code: string
  loader: LoaderName
}

export type LoaderName = 'js' | 'jsx' | 'ts' | 'tsx' | 'css' | 'json'
