import { afterEach } from 'vitest'
import { setProjectAnnotations } from '@storybook/react'
import { cleanup } from '@testing-library/react'

import projectAnnotations from '../.storybook/preview'

afterEach(() => {
  cleanup()
})

setProjectAnnotations(projectAnnotations)
