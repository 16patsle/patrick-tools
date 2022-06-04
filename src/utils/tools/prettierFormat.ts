export const prettierFormat = (code: string): Promise<string> =>
  Promise.race([
    new Promise<string>((resolve, reject) => {
      if (!window.Worker) {
        reject(new Error('Worker is not available'))
        return
      }

      const prettierWorker = new Worker(
        new URL('./prettierFormatWorker.ts', import.meta.url),
        {
          type: 'module',
        }
      )

      prettierWorker.postMessage({
        type: 'format',
        code,
      })

      prettierWorker.onmessage = ({ data }) => {
        if (data.type === 'formatResult') {
          resolve(data.result)
        }
      }
    }),
    new Promise<string>((_resolve, reject) =>
      setTimeout(() => reject('Formatting took too long, try again.'), 10000)
    ),
  ])

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