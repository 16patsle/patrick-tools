import init, {transform} from 'lightningcss-wasm'

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export const minifyCss = async (
  code: string
): Promise<string> => {

  await init()

  const result = transform({
    filename: 'file.css',
    code: encoder.encode(code),
    minify: true
  })
  return decoder.decode(result.code)
}