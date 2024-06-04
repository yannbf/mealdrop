/// <reference types="vitest" />
import { mergeConfig } from 'vite'

import viteConfig from './test.plugin.config'

// https://vitejs.dev/config/
export default mergeConfig(viteConfig, {})
