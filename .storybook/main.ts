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
    'storybook-addon-designs',
    'storybook-mobile',
  ],
  staticDirs: ['../public'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...(options.plugins || []),
      'babel-plugin-open-source',
      [
        'istanbul',
        {
          cwd: path.join(__dirname, '..'),
          include: ['src/**'],
          exclude: [
            '**/*.d.ts',
            '**/*{.,-}{spec,stories,index.export,types}.{ts,tsx}',
            'src/App.tsx',
          ],
        },
      ],
    ],
  }),
  features: {
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
      builder: {
        lazyCompilation: true,
      },
    },
  },
} as StorybookConfig
