import { runInWorker } from '../runInWorker'

export const minifyCss = (code: string) =>
  runInWorker<LightningcssWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'minify',
    options: {
      code,
    },
  })

export type LightningcssWorkerData = {
  code: string
}
