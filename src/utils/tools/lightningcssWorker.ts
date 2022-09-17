import init, { transform } from 'lightningcss-wasm'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

onmessage = async function ({ data }) {
  try {
    if (data.type === 'minify') {
      await init()

      const result = transform({
        filename: 'file.css',
        code: encoder.encode(data.code),
        minify: true,
      })

      postMessage({
        type: 'minifyResult',
        result: decoder.decode(result.code),
      })
    }
  } catch (error) {
    postMessage({
      type: 'error',
      error,
    })
  }
}
