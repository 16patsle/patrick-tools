import { type LanguageName } from '../../../tools/CodeTransformer'
import { runInWorker, type StatusListener } from '../runInWorker'

type TransformOptions = {
  language: LanguageName
  jsx?: boolean
}

export const esbuildTransform = (
  code: string,
  { language, jsx }: TransformOptions,
  statusListener?: StatusListener
) => {
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
    },
    statusListener,
  })
}

export type EsbuildWorkerData = {
  code: string
  loader: LoaderName
}

export type LoaderName = 'js' | 'jsx' | 'ts' | 'tsx' | 'css' | 'json'
