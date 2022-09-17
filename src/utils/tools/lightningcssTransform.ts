export const minifyCss = async (
  code: string
): Promise<string> => Promise.race([
  new Promise<string>((resolve, reject) => {
    if (!window.Worker) {
      reject(new Error('Worker is not available'))
      return
    }

    const lightningcssWorker = new Worker(
      new URL('./lightningcssWorker.ts', import.meta.url),
      {
        type: 'module',
      }
    )

    lightningcssWorker.postMessage({
      type: 'minify',
      code,
    })

    lightningcssWorker.onmessage = ({ data }) => {
      if (data.type === 'minifyResult') {
        resolve(data.result)
      } else if (data.type === 'error') {
        reject(data.error)
      }
    }
  }),
  new Promise<string>((_resolve, reject) =>
    setTimeout(() => reject('Minifying took too long, try again.'), 10000)
  ),
])