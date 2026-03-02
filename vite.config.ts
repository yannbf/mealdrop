import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import storybookDevTools from 'vite-plugin-experimental-storybook-devtools/react'
import { DevTools } from '@vitejs/devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ...(process.env.STORYBOOK ? [] : [DevTools(), storybookDevTools()])],
  build: {
    outDir: 'build',
    rolldownOptions: {
      devtools: {}, // enable devtools mode
    },
  },
  server: {
    port: 3000,
  },
})
