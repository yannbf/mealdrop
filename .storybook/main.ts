const path = require('path')

module.exports = {
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
    '@storybook/addon-coverage',
    'storybook-addon-designs',
    'storybook-mobile',
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
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
}
