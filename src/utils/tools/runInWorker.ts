type RunInWorkerOptions<T extends {}> = {
  url: URL
  action: string
  options: T
  timeout?: number
  statusListener?: StatusListener
}

export type StatusListener = (message: string) => void

const workerMap: Record<string, { worker: Worker; busy: boolean }> = {}

export const runInWorker = <T, R>({
  url,
  action,
  options,
  timeout = 10000,
  statusListener,
}: RunInWorkerOptions<T>): Promise<R> =>
  Promise.race([
    new Promise<R>((resolve, reject) => {
      if (!globalThis.Worker) {
        reject(new Error('Worker is not available'))
        return
      }

      const workerKey = `${action}+${url.href}`
      let worker: Worker

      if (workerMap[workerKey]) {
        if (workerMap[workerKey].busy) {
          reject(new Error('Worker is already working'))
          return
        }
        // We have an existing, non-busy worker
        worker = workerMap[workerKey].worker
      } else {
        // We need to initialize the worker
        statusListener?.('Loading worker...')
        worker = new Worker(url, {
          type: 'module',
        })
        workerMap[workerKey] = {
          worker,
          busy: true,
        }
      }

      worker.postMessage({
        action,
        ...options,
      })

      worker.onmessage = ({ data }) => {
        if (data.type === `${action}Result`) {
          workerMap[workerKey].busy = false
          resolve(data.result)
        } else if (data.type === 'status' && statusListener) {
          statusListener(data.message)
        } else if (data.type === 'error') {
          workerMap[workerKey].busy = false
          reject(data.error)
        }
      }
    }),
    new Promise<R>((_resolve, reject) =>
      setTimeout(() => reject('Action took too long, try again.'), timeout)
    ),
  ])
