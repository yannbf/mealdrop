import { defineProject, mergeConfig } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-vitest/plugin';
import viteConfig from '../vite.config'

export default mergeConfig(
    viteConfig,
  defineProject({
    plugins: [
        storybookTest({
          configDir: '../.storybook',
          storybookScript: 'yarn storybook --ci'
        }),
      ],
      
      publicDir: '../public',
    test: {
        environment: 'happy-dom',
        setupFiles: './vitest.setup.ts',
        include: ['../src/**/*.stories.*'],
        server: {
            deps: {
            inline: ['vitest-canvas-mock'],
            },
        },
        browser: {
            enabled: true,
            provider: 'playwright',
            name: 'chromium',
            headless: true,
            screenshotFailures: false,
        }
    },
  })
);
