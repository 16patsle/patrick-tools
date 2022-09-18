import { type TerserWorkerData } from './transform'
import { listenFromWorker } from '../listenFromWorker'
import { minify } from 'terser'

listenFromWorker<TerserWorkerData, string>(
  'minify',
  async (data, reportStatus) => {
    reportStatus('Minifying code...')

    const result = await minify(data.code)

    if (!result.code) {
      throw Error('terser did not return any code')
    }

    return result.code
  }
)
