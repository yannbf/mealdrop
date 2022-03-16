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
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  webpackFinal: (config) => {
    // Preset CRA does not take these into consideration, gotta do it manually
    return {
      ...config,
      // comment this in or out to enable fsCaching. Equivalent of fsCache: true
      cache: {
        type: 'filesystem',
      },
      // comment this in or out to enable lazyCompilation. Equivalent of lazyCompilation: true
      experiments: {
        lazyCompilation: {
          entries: false,
        },
      },
    }
  },
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      // This would be the correct way to set them. Should work in non-CRA projects
      // options: {
      //   fsCache: true,
      //   lazyCompilation: true,
      // },
    },
  },
}
