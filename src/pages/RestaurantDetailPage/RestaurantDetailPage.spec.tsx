import { createTest } from '@storybook/react/experimental-playwright'
import { test as base } from '@playwright/experimental-ct-react'

import stories from './RestaurantDetailPage.stories.portable'

const test = createTest(base)

test.describe('renders RestaurantDetailPage stories', async () => {
  test('Default', async ({ mount }) => {
    await mount(<stories.Success />)
  })
  test('Error', async ({ mount }) => {
    await mount(<stories.Error />)
  })
  test('NotFound', async ({ mount }) => {
    await mount(<stories.NotFound />)
  })
  test('Loading', async ({ mount }) => {
    await mount(<stories.Loading />)
  })
})
