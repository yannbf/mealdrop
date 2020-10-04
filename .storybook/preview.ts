import { appDecorators } from './decorators'
import { withDesign } from 'storybook-addon-designs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { viewports as breakpoints } from '../src/styles/breakpoints'

// Create viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).map((name) => {
  return {
    name: `Breakpoint - ${name}`,
    styles: {
      width: `${breakpoints[name]}px`,
      // Account for padding and border around viewport preview
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  }
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
}

export const decorators = [...appDecorators, withDesign]
