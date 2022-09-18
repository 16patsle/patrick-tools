import { runInWorker, type StatusListener } from '../runInWorker'

export const swcTransform = (code: string, parser: ParserName, statusListener?: StatusListener) =>
  runInWorker<SwcWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      parser,
    },
    statusListener
  })

export type SwcWorkerData = {
  code: string
  parser: ParserName
}

export type ParserName = 'typescript' | 'ecmascript'
