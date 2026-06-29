import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { experimental_vitePlugin } from '@storybook/builder-vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), experimental_vitePlugin()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
})
