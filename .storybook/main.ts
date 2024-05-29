import { StorybookConfig } from '@storybook/react-vite'

const mdxStories = process.env.NO_DOCS
  ? []
  : ['../src/docs/Introduction.mdx', '../src/docs/*.mdx', '../src/**/*.mdx']

const config: StorybookConfig = {
  stories: [...mdxStories, '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    process.env.NO_DOCS
      ? {
          name: '@storybook/addon-essentials',
          options: {
            docs: false,
          },
        }
      : '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    // '@storybook/addon-coverage',
    '@storybook/addon-designs',
    '@storybook/addon-jest',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve('path-browserify'),
      },
    }

    return config
  },
}
export default config
