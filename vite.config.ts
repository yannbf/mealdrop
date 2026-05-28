import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(projectRoot, 'src'),
      '~components': path.resolve(projectRoot, 'src/components'),
      // baseUrl-style bare imports (tsconfig "baseUrl": "src")
      components: path.resolve(projectRoot, 'src/components'),
      'app-state': path.resolve(projectRoot, 'src/app-state'),
      helpers: path.resolve(projectRoot, 'src/helpers'),
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
})
