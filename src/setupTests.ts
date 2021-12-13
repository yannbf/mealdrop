import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'
import { setGlobalConfig } from '@storybook/testing-react'
import React from 'react'

global.React = React
import * as globalStorybookConfig from '../.storybook/preview'

setGlobalConfig(globalStorybookConfig)

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
window.scrollTo = () => {}
