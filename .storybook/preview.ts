import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { globalDecorators } from './decorators'
import { viewports as breakpoints } from '../src/styles/breakpoints'

// @ts-ignore This addon has no types unfortunately
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'

initializeWorker()

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
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
}, {} as typeof INITIAL_VIEWPORTS)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
}

export const decorators = [...globalDecorators, mswDecorator]
