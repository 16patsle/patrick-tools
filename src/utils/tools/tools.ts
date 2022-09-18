import {
  type PackageJson,
} from '../../components/PackageVersionNumber'
import esbuildPackageJson from 'esbuild-wasm/package.json'
import lightningcssPackageJson from 'lightningcss-wasm/package.json'
import swcPackageJson from '@swc/wasm-web/package.json'
import terserPackageJson from 'terser/package.json'

export type ToolName = 'esbuild' | 'lightningcss' | 'swc' | 'terser'
export type Tool = {
  id: ToolName
  name: string
  packageJson: PackageJson
  supports?: ('jsx' | 'minify')[]
  actionText?: string
}

export const tools: Tool[] = [
  {
    id: 'esbuild',
    name: 'esbuild',
    packageJson: esbuildPackageJson,
    supports: ['jsx', 'minify'],
  },
  {
    id: 'lightningcss',
    name: 'Lightning CSS',
    packageJson: lightningcssPackageJson,
    actionText: 'Minify'
  },
  {
    id: 'swc',
    name: 'swc',
    packageJson: swcPackageJson,
    supports: ['jsx', 'minify'],
  },
  {
    id: 'terser',
    name: 'terser',
    packageJson: terserPackageJson,
    actionText: 'Minify'
  },
]