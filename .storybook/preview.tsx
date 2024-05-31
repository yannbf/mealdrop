import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { globalDecorators } from './decorators'
import { viewports as breakpoints } from '../src/styles/breakpoints'
import { DocsContainer, DocsContainerProps } from '@storybook/blocks'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme'
import { mswLoader } from 'msw-storybook-addon'

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc[`breakpoint${key}`] = {
      name: `Breakpoint - ${key}`,
      styles: {
        width: `${breakpoints[key as keyof typeof breakpoints]}px`,
        // Account for padding and border around viewport preview
        height: 'calc(100% - 20px)',
      },
      type: 'other',
    }
    return acc
  },
  {} as typeof INITIAL_VIEWPORTS
)

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
      source: {
        excludeDecorators: true,
      },
      container: (props: DocsContainerProps) => (
        <ThemeProvider theme={lightTheme}>
          <DocsContainer {...props} />
        </ThemeProvider>
      ),
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for the components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
        ],
      },
    },
  },
  decorators: globalDecorators,
  loaders: [mswLoader],
}
export default preview
