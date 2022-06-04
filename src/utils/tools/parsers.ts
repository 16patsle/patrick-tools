export const parsers = [
  {
    id: 'babel',
    name: 'JavaScript',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  {
    id: 'babel-ts',
    name: 'TypeScript',
    extensions: ['.ts', '.tsx'],
  },
  {
    id: 'css',
    name: 'CSS',
    extensions: ['.css'],
  },
  {
    id: 'scss',
    name: 'SCSS',
    extensions: ['.scss'],
  },
  {
    id: 'json',
    name: 'JSON',
    extensions: ['.json'],
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    extensions: ['.graphql'],
  },
  {
    id: 'markdown',
    name: 'Markdown',
    extensions: ['.md', '.markdown'],
  },
  {
    id: 'mdx',
    name: 'MDX',
    extensions: ['.mdx'],
  },
  {
    id: 'html',
    name: 'HTML',
    extensions: ['.html', '.htm'],
    embedded: ['css', 'babel'],
  },
  {
    id: 'vue',
    name: 'Vue',
    extensions: ['.vue'],
    embedded: ['css', 'scss', 'babel', 'babel-ts'],
  },
  {
    id: 'yaml',
    name: 'YAML',
    extensions: ['.yaml', '.yml'],
  },
]
