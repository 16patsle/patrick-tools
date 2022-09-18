import { type LanguageName } from '../../../tools/CodeTransformer'
import { runInWorker, type StatusListener } from '../runInWorker'

type TransformOptions = {
  language: LanguageName
  jsx?: boolean
}

export const swcTransform = (
  code: string,
  {language, jsx}: TransformOptions,
  statusListener?: StatusListener
) =>{
  const parser = language === 'ts' ? 'typescript' : 'ecmascript'
  return runInWorker<SwcWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      parser,
      jsx,
    },
    statusListener,
  })}

export type SwcWorkerData = {
  code: string
  parser: ParserName
  jsx?: boolean
}

export type ParserName = 'typescript' | 'ecmascript'
