export type LanguageName = 'js' | 'ts' | 'css' | 'json'
export type Language = {
  id: LanguageName
  name: string
  extensions: string[]
}

export const languages: Language[] = [
  {
    id: 'js',
    name: 'JavaScript',
    extensions: ['.js', '.cjs', '.mjs'],
  },
  {
    id: 'ts',
    name: 'TypeScript',
    extensions: ['.ts', '.mts', '.cts'],
  },
  {
    id: 'css',
    name: 'CSS',
    extensions: ['.css'],
  },
  {
    id: 'json',
    name: 'JSON',
    extensions: ['.json'],
  },
]