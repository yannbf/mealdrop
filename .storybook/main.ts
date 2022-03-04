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
    'storybook-addon-designs',
    'storybook-mobile',
  ],
  // In case you'd like to disable docgen-typescript (70% Sealing typescript step)
  // typescript: {
  //   reactDocgen: 'react-docgen',
  // },
  webpackFinal: (config) => {
    // Preset CRA does not take these into consideration, gotta do it manually
    return {
      ...config,
      cache: {
        type: 'filesystem',
      },
      experiments: {
        lazyCompilation: {
          entries: false,
        },
      },
    }
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,

    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    // don't work in this project
    options: {
      fsCache: true,
      lazyCompilation: true,
    },
  },
}
