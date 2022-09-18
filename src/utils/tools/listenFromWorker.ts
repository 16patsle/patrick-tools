export const listenFromWorker = <T, R>(
  action: string,
  callback: (
    data: T & { action: string },
    reportStatus: (message: string) => void
  ) => Promise<R>
) => {
  self.onmessage = async ({ data }) => {
    try {
      if (data.action === action) {
        const reportStatus = (message: string) =>
          postMessage({
            type: 'status',
            message,
          })
        postMessage({
          type: `${action}Result`,
          result: await callback(data, reportStatus),
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
