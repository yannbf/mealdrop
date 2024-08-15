if(!globalThis.__vitest_browser__) {
  await import('vitest-canvas-mock')
  const { getComputedStyle } = window
  window.getComputedStyle = (elt) => getComputedStyle(elt)
  window.scrollTo = () => {}
}

import { setProjectAnnotations } from '@storybook/react'
import storybookAnnotations from './.storybook/preview'

setProjectAnnotations([storybookAnnotations])
