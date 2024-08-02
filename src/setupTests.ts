import { setProjectAnnotations } from '@storybook/react'
import { cleanup, render as testingLibraryRender } from '@testing-library/react'
import storybookAnnotations from '../.storybook/preview'

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
setProjectAnnotations([storybookAnnotations, { testingLibraryRender }])
