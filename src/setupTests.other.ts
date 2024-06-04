import { afterEach, afterAll, vi } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import { cleanup } from '@testing-library/react'

import globalStorybookConfig from '/Users/yannbraga/Dev/mealdrop/.storybook/preview'

afterEach(() => {
  cleanup()
})

setProjectAnnotations(globalStorybookConfig)
