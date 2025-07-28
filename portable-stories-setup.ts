if (!globalThis.__vitest_browser__) {
  await import('vitest-canvas-mock')
  const { getComputedStyle } = globalThis
  globalThis.getComputedStyle = (elt) => getComputedStyle(elt)
  window.scrollTo = () => {}
}

import { beforeAll, expect } from 'vitest'
import { setProjectAnnotations } from '@storybook/react-vite'
import { render as testingLibraryRender } from '@testing-library/react'
import storybookAnnotations from './.storybook/preview'
import '@testing-library/jest-dom/vitest'
import * as matchers from 'vitest-axe/matchers'
expect.extend(matchers)

const annotations = setProjectAnnotations([storybookAnnotations, { testingLibraryRender }])
beforeAll(annotations.beforeAll)
