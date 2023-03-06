import { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    'storybook-addon-designs',
    'storybook-mobile',
  ],
  babel: async (options) => {
    return {
      ...options,
      plugins: [...(options.plugins || []), 'babel-plugin-open-source'],
    }
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
}

export default config
