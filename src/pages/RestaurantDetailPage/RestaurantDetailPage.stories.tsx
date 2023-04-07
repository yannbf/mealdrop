import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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

export const Success = {
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
}

export const WithModalOpen: Story = {
  ...Success,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const item = await canvas.findByText(/Cheeseburger/i)
    await userEvent.click(item)
    await expect(canvas.getByTestId('modal')).toBeInTheDocument()
  },
}

export const WithItemsInTheCart: Story = {
  parameters: {
    ...Success.parameters,
    store: {
      initialState: { cart: { items: cartItems } },
    },
  },
}

export const Loading: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=2152%3A3158',
    },
    msw: {
      handlers: [
        rest.get(BASE_URL, (req, res, ctx) => {
          return res(ctx.delay('infinite'))
        }),
      ],
    },
  },
}

export const NotFound: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1097%3A3785',
    },
    msw: {
      handlers: [
        rest.get(BASE_URL, (req, res, ctx) => {
          return res(ctx.status(404))
        }),
      ],
    },
  },
}

export const Error: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1091%3A4537',
    },
    msw: {
      handlers: [
        rest.get(BASE_URL, (req, res, ctx) => {
          return res(ctx.status(500))
        }),
      ],
    },
  },
}
