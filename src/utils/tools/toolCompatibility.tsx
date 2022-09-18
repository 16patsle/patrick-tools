import { type LanguageName } from './languages';
import { type ToolName } from './tools';

export const toolCompatibility: Record<LanguageName, ToolName[]> = {
  js: ['esbuild', 'swc', 'terser'],
  ts: ['esbuild', 'swc'],
  css: ['lightningcss', 'esbuild'],
  json: ['esbuild'],
};
