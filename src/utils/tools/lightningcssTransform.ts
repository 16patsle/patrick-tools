import { runInWorker } from './runInWorker'

export const minifyCss = (code: string): Promise<string> =>
  runInWorker({
    url: new URL('./lightningcssWorker.ts', import.meta.url),
    action: 'minify',
    options: {
      code,
    },
  })
