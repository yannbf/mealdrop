import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { expect } from '@storybook/test'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'
import { cartItems } from '../../stub/cart-items'
import { withDeeplink } from '../../../.storybook/withDeeplink'

import { RestaurantDetailPage } from './RestaurantDetailPage'

const meta = {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  decorators: [withDeeplink],
  parameters: {
    layout: 'fullscreen',
    deeplink: {
      route: '/restaurants/1',
      path: '/restaurants/:id',
    },
  },
  render: () => {
    return (
      <>
        <RestaurantDetailPage />
        <div id="modal" />
      </>
    )
  },
} satisfies Meta<typeof RestaurantDetailPage>
export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169%3A510',
    },
    msw: [
      rest.get(BASE_URL, (req, res, ctx) => {
        return res(ctx.json(restaurants[0]))
      }),
    ],
  },
  play: async () => {
    // fails with this but it could be any import
    // for instance within() would fail similarly
    expect(1).toBe(1)
  },
}
