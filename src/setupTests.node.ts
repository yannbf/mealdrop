import '@testing-library/jest-dom/vitest'
import 'vi-canvas-mock'
import * as axeMatchers from 'vitest-axe/matchers'
import { expect, afterEach, afterAll, vi } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { getWorker } from 'msw-storybook-addon'
// import { cleanup } from '@testing-library/react'
// import { setProjectAnnotations } from '@storybook/react'

// import projectAnnotations from '../.storybook/preview'

// extends Vitest's expect method with methods from react-testing-library and axe
expect.extend(matchers)
expect.extend(axeMatchers)

// setProjectAnnotations(projectAnnotations)

// runs a cleanup after each test case (e.g. clearing jsdom)
// afterEach(() => {
//   cleanup()
// })

afterAll(() => {
  // @ts-expect-error TODO fix this
  getWorker().close()
})

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
window.scrollTo = () => {}

const ignoreList = [(error: any) => error.message.includes('act')]

const throwMessage = (type: any, message: any) => {
  const error = new Error(`${type}${message}`)
  if (!ignoreList.reduce((acc, item) => acc || item(error), false)) {
    throw error
  }
}
const throwWarning = (message: any) => throwMessage('warn: ', message)
const throwError = (message: any) => throwMessage('error: ', message)

vi.spyOn(console, 'warn').mockImplementation(throwWarning)
vi.spyOn(console, 'error').mockImplementation(throwError)
