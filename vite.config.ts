import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { DevTools } from '@vitejs/devtools'
import sbPlugin from 'vite-plugin-experimental-storybook-devtools/react'
import { experimental_vitePlugin } from '@storybook/builder-vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    DevTools(),
    experimental_vitePlugin(),
    sbPlugin({
      storybookUrl: 'http://localhost:3000/__storybook/',
    }),
  ],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
})
