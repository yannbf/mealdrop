import { setProjectAnnotations } from '@storybook/react'

import globalStorybookConfig from '../.storybook/preview'

setProjectAnnotations(globalStorybookConfig)

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
window.scrollTo = () => {}
