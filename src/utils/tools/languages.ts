export type LanguageName =
  | 'js'
  | 'ts'
  | 'css'
  | 'scss'
  | 'json'
  | 'graphql'
  | 'markdown'
  | 'mdx'
  | 'html'
  | 'vue'
  | 'yaml'
export type Language = {
  id: LanguageName
  name: string
}

export const languages: Language[] = [
  {
    id: 'js',
    name: 'JavaScript',
  },
  {
    id: 'ts',
    name: 'TypeScript',
  },
  {
    id: 'css',
    name: 'CSS',
  },
  {
    id: 'scss',
    name: 'SCSS',
  },
  {
    id: 'json',
    name: 'JSON',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
  },
  {
    id: 'markdown',
    name: 'Markdown',
  },
  {
    id: 'mdx',
    name: 'MDX',
  },
  {
    id: 'html',
    name: 'HTML',
  },
  {
    id: 'vue',
    name: 'Vue',
  },
  {
    id: 'yaml',
    name: 'YAML',
  },
]
