module.exports = {
  stories: [
    '../src/docs/Introduction.stories.mdx',
    '../src/docs/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    // {
    //   name: '@storybook/addon-essentials',
    //   options: {
    //     docs: false,
    //   },
    // },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    'storybook-mobile',
  ],
  features: {
    // storyStoreV7: false,
    storyStoreV7: false,
    interactionsDebugger: true,
  },
}
