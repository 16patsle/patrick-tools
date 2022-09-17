export const listenFromWorker = <T, R>(
  action: string,
  callback: (data: T & { action: string }) => Promise<R>
) => {
  self.onmessage = async ({ data }) => {
    try {
      if (data.action === action) {
        postMessage({
          type: `${action}Result`,
          result: await callback(data),
        })
      }
    } catch (error) {
      postMessage({
        type: 'error',
        error,
      })
    }
  }
}
