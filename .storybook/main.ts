const path = require('path')

module.exports = {
  stories: [
    '../src/docs/*.stories.mdx',
    '../src/**/Button.stories.@(js|jsx|ts|tsx)',
    '../src/**/Category.stories.@(js|jsx|ts|tsx)',
    '../src/**/RestaurantCard.stories.@(js|jsx|ts|tsx)',
    '../src/**/RestaurantDetailPage.stories.@(js|jsx|ts|tsx)',
    '../src/**/UserFlows.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    // '@storybook/addon-coverage',
    'storybook-addon-variants',
    'storybook-addon-designs',
    // 'storybook-mobile',
  ],
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
