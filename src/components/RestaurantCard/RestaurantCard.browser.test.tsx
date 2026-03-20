import { test, expect } from 'vitest'
import { page } from 'vitest/browser'
import { takeSnapshot } from '@chromatic-com/vitest'
import { RestaurantCard } from './RestaurantCard'
import { restaurants } from '../../stub/restaurants'
import { render } from '../../test-utils'
import { useState } from 'react'

const [restaurant] = restaurants

test('renders', async () => {
  await render(<RestaurantCard {...restaurant} />)

  await expect.element(page.getByRole('heading', { name: restaurant.name, level: 2 })).toBeVisible()
  await expect.element(page.getByText(`${restaurant.rating} Very good`)).toBeVisible()
  await expect.element(page.getByText(restaurant.specialty)).toBeVisible()

  expect(restaurant.categories).toHaveLength(2)

  for (const category of restaurant.categories!) {
    await expect.element(page.getByText(category, { exact: true })).toBeVisible()
  }
})

test('new label', async () => {
  await render(<RestaurantCard {...restaurant} isNew />)

  await expect.element(page.getByText('new')).toBeVisible()
})

test('loading transition', async () => {
  let resolve = () => {}
  function Wrapper() {
    const [isLoading, setIsLoading] = useState(true)
    resolve = () => setIsLoading(false)

    return <RestaurantCard {...restaurant} isLoading={isLoading} />
  }

  await render(<Wrapper />)
  await takeSnapshot('Loading')

  resolve()
  await expect.element(page.getByText(restaurant.name)).toBeVisible()
})

test('hover', async () => {
  await render(<RestaurantCard {...restaurant} />)

  await page.getByText(restaurant.name).hover()
})
