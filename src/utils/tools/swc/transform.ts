import { runInWorker } from '../runInWorker'

export const swcTransform = (code: string, parser: ParserName) =>
  runInWorker<SwcWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      parser,
    },
  })

export type SwcWorkerData = {
  code: string
  parser: ParserName
}

export type ParserName = 'typescript' | 'ecmascript'
