import { runInWorker } from '../runInWorker'

export const prettierFormat = (code: string, parser: ParserName) =>
  runInWorker<PrettierWorkerData, string>({
    url: new URL('./formatWorker.ts', import.meta.url),
    action: 'format',
    options: {
      code,
      parser,
    },
  })

export type PrettierWorkerData = {
  code: string
  parser: ParserName
}

export type ParserName =
  | 'babel'
  | 'babel-ts'
  | 'css'
  | 'scss'
  | 'json'
  | 'graphql'
  | 'markdown'
  | 'mdx'
  | 'html'
  | 'vue'
  | 'yaml'
