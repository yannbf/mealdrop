import { createTest } from '@storybook/react/experimental-playwright'
import { test as base } from '@playwright/experimental-ct-react'

import stories from './RestaurantCard.stories.portable'

const test = createTest(base)

test.describe('renders RestaurantCard stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<stories.Default />)
  })
  test('New', async ({ mount }) => {
    await mount(<stories.New />)
  })
  test('Closed', async ({ mount }) => {
    await mount(<stories.Closed />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<stories.Loading />)
  })
})
