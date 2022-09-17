import { runInWorker } from './runInWorker'

export const esbuildTransform = (code: string) =>
  runInWorker<EsbuildWorkerData, string>({
    url: new URL('./esbuildTransformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
    },
  })

export type EsbuildWorkerData = {
  code: string
}
