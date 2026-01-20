import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
    // TODO: this addon has a bad instrumentation of getConfig.asyncWrapper that should be fixed
    getAbsolutePath('storybook-addon-test-codegen'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-designs'),
    {
      name: getAbsolutePath('@storybook/addon-mcp'),
      options: {
        toolsets: {
          dev: true, // Tools for story URL retrieval and UI building instructions (default: true)
          docs: true, // Tools for component manifest and documentation (default: true, requires experimental feature flag below 👇)
        },
        experimentalFormat: 'markdown', // Output format: 'markdown' (default) or 'xml'
      },
    },
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  staticDirs: ['../public'],
  framework: getAbsolutePath('@storybook/react-vite'),
  features: {
    experimentalComponentsManifest: true,
    experimentalCodeExamples: true,
  },
}
export default config

function getAbsolutePath(value: string): any {
  return path.dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
