import { runInWorker, type StatusListener } from '../runInWorker'

export const esbuildTransform = (
  code: string,
  loader: LoaderName,
  statusListener?: StatusListener
) =>
  runInWorker<EsbuildWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      loader,
    },
    statusListener,
  })

export type EsbuildWorkerData = {
  code: string
  loader: LoaderName
}

export type LoaderName = 'js' | 'jsx' | 'ts' | 'tsx' | 'css' | 'json'
