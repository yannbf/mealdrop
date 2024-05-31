import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
// @ts-ignore-next-line
import chromaticLogo from '../src/assets/images/logo-chromatic.svg'

const theme = create({
  base: 'dark',
  brandImage: chromaticLogo,
})

addons.setConfig({
  theme,
  showPanel: true,
  panelPosition: 'right',
})
