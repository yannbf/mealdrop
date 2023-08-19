import { test as storybookTest } from '@storybook/playwright-ct'
import { test as playwrightTest, expect } from '@playwright/experimental-ct-react17'

import * as stories from './Button.stories'
import { Button } from './Button'

// Works (with theme decorator added in playwright/index.ts) ✅
playwrightTest.skip('via playwright + normal component', async ({ mount }) => {
  const component = await mount(<Button>Hello world</Button>)
  await expect(component).toContainText('Hello world')
})

// Works with composeStories but only if it comes from a separate file ✅
// https://github.com/microsoft/playwright/issues/18057#issuecomment-1284501646
playwrightTest.skip('via playwright + composeStories', async ({ mount }) => {
  const component = await mount(<stories.ButtonDefault>Hello world</stories.ButtonDefault>)
  await expect(component).toContainText('Hello world')
})

// Fails with "toContainText can be only used with Locator object" ❌
storybookTest.skip('via storybook ct', async ({ mount }) => {
  const component = await mount(stories.Default, { children: 'Hello world' })
  await expect(component).toContainText('Hello world')
})

// Fails with "component.getByRole is not a function" ❌
storybookTest.skip('via storybook ct with click handler', async ({ mount }) => {
  let count = 0
  const component = await mount(stories.Default, {
    onClick: () => {
      count += 1
    },
  })
  const button = await component.getByRole('button')
  await button.click()
  await expect(count).toBe(1)
})
