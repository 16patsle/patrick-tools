import prettier from 'prettier/standalone'

onmessage = async function ({ data }) {
  if (data.type === 'format') {
    const parserBabel = await import('prettier/parser-babel')

    const result = prettier.format(data.code, {
      parser: 'babel',
      plugins: [parserBabel],
    })
    postMessage({
      type: 'formatResult',
      result: result,
    })
  }
}
