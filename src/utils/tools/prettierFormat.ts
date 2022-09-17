import { runInWorker } from './runInWorker'

export const prettierFormat = (
  code: string,
  parser: ParserName
): Promise<string> =>
  runInWorker({
    url: new URL('./prettierFormatWorker.ts', import.meta.url),
    action: 'format',
    options: {
      code,
      parser,
    },
  })

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
