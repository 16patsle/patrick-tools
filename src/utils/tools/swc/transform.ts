import { type LanguageName } from '../languages'
import { runInWorker, type StatusListener } from '../runInWorker'

type TransformOptions = {
  language: LanguageName
  jsx?: boolean
}

export const swcTransform = (
  code: string,
  { language, ...options }: TransformOptions,
  statusListener?: StatusListener
) => {
  const parser = language === 'ts' ? 'typescript' : 'ecmascript'
  return runInWorker<SwcWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      parser,
      ...options,
    },
    statusListener,
  })
}

export type SwcWorkerData = {
  code: string
  parser: ParserName
  jsx?: boolean
  minify?: boolean
}

export type ParserName = 'typescript' | 'ecmascript'
