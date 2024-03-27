import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse, delay } from 'msw'
import { within, userEvent } from '@storybook/test'
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

export const Success = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169%3A510',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          return HttpResponse.json(restaurants[0])
        }),
      ],
    },
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
        http.get(BASE_URL, async () => {
          await delay('infinite')
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const item = await canvas.findByText(/Looking for some food.../i)
    await expect(item).toBeInTheDocument()
  },
}

export const NotFound: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1097%3A3785',
    },
    msw: {
      handlers: {
        error: http.get(BASE_URL, () => {
          return HttpResponse.json(null, { status: 404 })
        }),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const item = await canvas.findByText(/We can't find this page/i)
    await expect(item).toBeInTheDocument()
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
        http.get(BASE_URL, () => {
          return HttpResponse.json({}, { status: 500 })
        }),
      ],
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('Name of step', async () => {
      const item = await canvas.findByText(/Something went wrong!/i)
      await expect(item).toBeInTheDocument()
    })
  },
}
