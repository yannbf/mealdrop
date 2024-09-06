import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/experimental-addon-test'
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
}
export default config
