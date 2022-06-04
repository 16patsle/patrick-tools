export const prettierFormat = (code: string): Promise<string> =>
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
      })

      prettierWorker.onmessage = ({ data }) => {
        if (data.type === 'formatResult') {
          resolve(data.result)
        }
      }
    }),
    new Promise<string>((_resolve, reject) =>
      setTimeout(() => reject('Formatting took too long, try again.'), 10000)
    ),
  ])
