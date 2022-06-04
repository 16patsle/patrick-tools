export const prettierFormat = (
  code: string,
  parser: ParserName
): Promise<string> =>
  Promise.race([
    new Promise<string>((resolve, reject) => {
      if (!window.Worker) {
        reject(new Error('Worker is not available'))
        return
      }

      const prettierWorker = new Worker(
        new URL('./prettierFormatWorker.ts', import.meta.url),
        {
          type: 'module',
        }
      )

      prettierWorker.postMessage({
        type: 'format',
        code,
        parser,
      })

      prettierWorker.onmessage = ({ data }) => {
        if (data.type === 'formatResult') {
          resolve(data.result)
        } else if (data.type === 'error') {
          reject(data.error)
        }
      }
    }),
    new Promise<string>((_resolve, reject) =>
      setTimeout(() => reject('Formatting took too long, try again.'), 10000)
    ),
  ])

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
