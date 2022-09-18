import { type LanguageName } from '../languages'
import { runInWorker, type StatusListener } from '../runInWorker'

type TransformOptions = {
  language: LanguageName
  jsx?: boolean
}

const allowedLanguages = ['js', 'jsx', 'ts', 'tsx', 'css', 'json']
const isAllowedLanguage = (language: string): language is LoaderName =>
  allowedLanguages.includes(language)

export const esbuildTransform = (
  code: string,
  { language, jsx, ...options }: TransformOptions,
  statusListener?: StatusListener
) => {
  if (!isAllowedLanguage(language)) {
    throw new Error('Unsupported language')
  }
  let loader: LoaderName = language
  if (jsx) {
    if (language === 'js') {
      loader = 'jsx'
    } else if (language === 'ts') {
      loader = 'tsx'
    }
  }
  return runInWorker<EsbuildWorkerData, string>({
    url: new URL('./transformWorker.ts', import.meta.url),
    action: 'transform',
    options: {
      code,
      loader,
      ...options,
    },
    statusListener,
  })
}

export type EsbuildWorkerData = {
  code: string
  loader: LoaderName
  minify?: boolean
}

export type LoaderName = 'js' | 'jsx' | 'ts' | 'tsx' | 'css' | 'json'
