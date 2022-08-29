import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'

export default {
  stories: [
    '../src/docs/Introduction.stories.mdx',
    '../src/docs/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    // TODO: fix the addon
    // 'storybook-addon-designs',
    '@storybook/addon-coverage',
    // TODO: fix the addon
    // 'storybook-mobile',
  ],
  babel: async (options) => {
    return {
      ...options,
      plugins: [...options.plugins, 'babel-plugin-open-source'],
    }
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  webpackFinal: async (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      // magic number to fix double HMR
      aggregateTimeout: 80,
    }

    return config
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      // TODO: does not work with test runner
      // builder: {
      //   lazyCompilation: true,
      // },
    },
  },
} as StorybookConfig
