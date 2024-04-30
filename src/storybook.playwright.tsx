// @ts-expect-error types missing
import { createTest } from '@storybook/react/experimental-playwright'
import { test as base } from '@playwright/experimental-ct-react17'

import stories from './storybook.portable'

const test = createTest(base)

test('renders button stories', async ({ mount }) => {
  await mount(<stories.Default />)
})
