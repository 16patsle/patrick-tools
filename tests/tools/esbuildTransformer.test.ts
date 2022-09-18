import '@vitest/web-worker'
import { expect, test, vi } from 'vitest'
const esbuildTransformImport = import('../../src/utils/tools/esbuild/transform')

import fs from 'fs/promises'
import path from 'path'

vi.stubGlobal('fetch', async (filepath: string) => {
  const url = new URL(filepath)
  const resolvedPath = path
    .resolve(url.pathname)
    .replace(/^\/node_modules/, './node_modules')
  try {
    const file = await fs.readFile(resolvedPath)
    return {
      ok: true,
      arrayBuffer: () => file,
    }
  } catch {
    return {
      ok: false,
    }
  }
})

import { cryptoPolyfill } from '../utils/cryptoPolyfill'

vi.stubGlobal('crypto', cryptoPolyfill)

test.skip('returns minified JavaScript', async () => {
  const { esbuildTransform } = await esbuildTransformImport
  expect(await esbuildTransform('const a = "test"', 'js')).toBe('')
})
