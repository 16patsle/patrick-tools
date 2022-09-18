import { runInWorker, type StatusListener } from '../runInWorker'

export const prettierFormat = (
  code: string,
  parser: ParserName,
  statusListener?: StatusListener
) =>
  runInWorker<PrettierWorkerData, string>({
    url: new URL('./formatWorker.ts', import.meta.url),
    action: 'format',
    options: {
      code,
      parser,
    },
    statusListener,
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
