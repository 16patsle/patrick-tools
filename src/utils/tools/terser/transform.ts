import { runInWorker, type StatusListener } from '../runInWorker'

export const terserMinify = (code: string, statusListener?: StatusListener) =>
  runInWorker<TerserWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'minify',
    options: {
      code,
    },
    statusListener,
  })

export type TerserWorkerData = {
  code: string
}
