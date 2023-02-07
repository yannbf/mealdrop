import '@testing-library/jest-dom/extend-expect'
import 'vitest-canvas-mock'
import { setProjectAnnotations } from '@storybook/react'
import * as axeMatchers from 'vitest-axe/matchers'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import * as globalStorybookConfig from '../.storybook/preview'

// // extends Vitest's expect method with methods from react-testing-library and axe
expect.extend(matchers)
expect.extend(axeMatchers)

// // runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
// @ts-ignore
setProjectAnnotations(globalStorybookConfig)

// // https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
window.scrollTo = () => {}
