/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['lightningcss-wasm'],
  },
  plugins: [react(), legacy()],
  test: {
    coverage: {
      reporter: ['html-spa'],
    },
  },
})
