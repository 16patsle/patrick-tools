import { runInWorker, type StatusListener } from '../runInWorker'

export const minifyCss = (code: string, statusListener?: StatusListener) =>
  runInWorker<LightningcssWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'minify',
    options: {
      code,
    },
    statusListener,
  })

export type LightningcssWorkerData = {
  code: string
}
