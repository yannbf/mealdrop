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
    'storybook-addon-designs',
    'storybook-mobile',
  ],
  staticDirs: ['../public'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
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
    storyStoreV7: true,
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
