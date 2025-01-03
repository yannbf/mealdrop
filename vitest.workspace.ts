import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';


// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineWorkspace([
  'vitest.config.ts',
  {
    extends: 'vite.config.ts',
    plugins: [
      // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
      storybookTest({ configDir: '.storybook' }),
    ],
    optimizeDeps: {
      include: [
        '@storybook/addon-a11y/preview', 
        '@storybook/react', 
        '@storybook/addon-viewport', 
        '@storybook/blocks', 
        'styled-components', 
        'msw-storybook-addon', 
        'react-router-dom', 
        '@reduxjs/toolkit', 
        'react-redux', 
        'chromatic/isChromatic', 
        '@storybook/test',
        'axios',
        'react-multi-carousel', 
        'react-hooks-helper', 
        'react-loading-skeleton', 
        'react-lottie-player', 
        'use-dark-mode', 
        'react-transition-group', 
        'react-dom'
      ]
    },
    publicDir: 'public',
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright',
      },
      // Make sure to adjust this pattern to match your stories files.
      include: ['**/*.stories.?(m)[jt]s?(x)'],
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  },
]);
