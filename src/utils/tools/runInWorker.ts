type RunInWorkerOptions<T extends {}> = {
  url: URL
  action: string
  options: T
  timeout?: number
}

export const runInWorker = <T, R>({
  url,
  action,
  options,
  timeout = 10000,
}: RunInWorkerOptions<T>): Promise<R> =>
  Promise.race([
    new Promise<R>((resolve, reject) => {
      if (!globalThis.Worker) {
        reject(new Error('Worker is not available'))
        return
      }

      const worker = new Worker(url, {
        type: 'module',
      })

      worker.postMessage({
        action,
        ...options,
      })

      worker.onmessage = ({ data }) => {
        if (data.type === `${action}Result`) {
          resolve(data.result)
        } else if (data.type === 'error') {
          reject(data.error)
        }
      }
    }),
    new Promise<R>((_resolve, reject) =>
      setTimeout(() => reject('Action took too long, try again.'), timeout)
    ),
  ])
