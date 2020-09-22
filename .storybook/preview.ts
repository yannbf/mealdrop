import { withGlobalStyles, withRouter } from './decorators'
import { withDesign } from 'storybook-addon-designs'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [withGlobalStyles, withRouter, withDesign]
