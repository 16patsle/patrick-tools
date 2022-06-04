import { Plugin } from 'prettier'
import prettier from 'prettier/standalone'
import { parsers } from './parsers'

onmessage = async function ({ data }) {
  try {
    if (data.type === 'format') {
      const parserName = data.parser ?? 'babel'
      const parserData = parsers.find(({ id }) => id === parserName)

      let embeddedParsers: Plugin<any>[] = []
      if (parserData?.embedded) {
        for (const embedded of parserData.embedded) {
          embeddedParsers.push(await loadPlugin(embedded))
        }
      }

      const result = prettier.format(data.code, {
        parser: data.parser ?? 'babel',
        plugins: [await loadPlugin(parserName), ...embeddedParsers],
      })
      postMessage({
        type: 'formatResult',
        result: result,
      })
    }
  } catch (error) {
    postMessage({
      type: 'error',
      error,
    })
  }
}

const loadPlugin = async (name: string): Promise<Plugin<any>> => {
  switch (name) {
    case 'babel':
      return import('prettier/parser-babel')
    case 'babel-ts':
      return import('prettier/parser-babel')
    case 'css':
      return import('prettier/parser-postcss')
    case 'scss':
      return import('prettier/parser-postcss')
    case 'json':
      return import('prettier/parser-babel')
    case 'graphql':
      return import('prettier/parser-graphql')
    case 'markdown':
      return import('prettier/parser-markdown')
    case 'mdx':
      return import('prettier/parser-markdown')
    case 'html':
      return import('prettier/parser-html')
    case 'vue':
      return import('prettier/parser-html')
    case 'yaml':
      return import('prettier/parser-yaml')
    default:
      throw new Error(`Unknown parser: ${name}`)
  }
}
