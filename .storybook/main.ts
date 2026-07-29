import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    // TODO: this addon has a bad instrumentation of getConfig.asyncWrapper that should be fixed
    'storybook-addon-test-codegen',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
    'msw-storybook-addon',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: '@storybook/react-vite',
  features: {
    experimentalCodeExamples: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore this exists just doesn't have types
    experimentalReview: true,
  },
}
export default config
