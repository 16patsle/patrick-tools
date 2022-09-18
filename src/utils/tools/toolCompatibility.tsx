import { type LanguageName } from './languages'
import { type ToolName } from './tools'

export const toolCompatibility: Record<LanguageName, ToolName[]> = {
  js: ['esbuild', 'swc', 'terser', 'prettier'],
  ts: ['esbuild', 'swc', 'prettier'],
  css: ['lightningcss', 'esbuild', 'prettier'],
  scss: ['prettier'],
  json: ['esbuild'],
  graphql: ['prettier'],
  markdown: ['prettier'],
  mdx: ['prettier'],
  html: ['prettier'],
  vue: ['prettier'],
  yaml: ['prettier'],
}
