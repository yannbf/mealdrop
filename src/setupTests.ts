import '@testing-library/jest-dom/vitest'
import 'vitest-canvas-mock'
import { setProjectAnnotations } from '@storybook/react'
import * as axeMatchers from 'vitest-axe/matchers'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { getWorker } from 'msw-storybook-addon'

import globalStorybookConfig from '../.storybook/preview'

// extends Vitest's expect method with methods from react-testing-library and axe
expect.extend(matchers)
expect.extend(axeMatchers)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
afterAll(() => {
  // @ts-expect-error TODO fix this
  getWorker().close()
})
setProjectAnnotations(globalStorybookConfig)

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
window.scrollTo = () => {}
