import preview from '#.storybook/preview'
import { http, HttpResponse, delay } from 'msw'
import { expect } from 'storybook/test'

import { BASE_URL } from '../../api'
import { restaurantsCompleteData } from '../../stub/restaurants'
import { cartItems } from '../../stub/cart-items'
import { withDeeplink } from '../../../.storybook/withDeeplink'

import { RestaurantDetailPage } from './RestaurantDetailPage'

const meta = preview.meta({
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
})

export const Success = meta.story({
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169%3A510',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          return HttpResponse.json(restaurantsCompleteData[0])
        }),
      ],
    },
  },
  play: async ({ canvas }) => {
    const item = await canvas.findByText(/Burger Kingdom/i)
    await expect(item).toBeInTheDocument()
  },
})
Success.test('should open a modal on click', async (context) => {
  const item = await context.canvas.findByText(/Cheeseburger/i)
  await context.userEvent.click(item)
  await expect(context.canvas.getByTestId('modal')).toBeInTheDocument()
})

export const WithItemsInTheCart = meta.story({
  parameters: {
    ...Success.input.parameters,
    store: {
      initialState: { cart: { items: cartItems } },
    },
  },
})

export const Loading = meta.story({
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
  play: async ({ canvas }) => {
    const item = await canvas.findByText(/Looking for some food.../i)
    await expect(item).toBeInTheDocument()
  },
})

export const NotFound = meta.story({
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
  play: async ({ canvas }) => {
    const item = await canvas.findByText(/We can't find this page/i)
    await expect(item).toBeInTheDocument()
  },
})

export const Error = meta.story({
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
  play: async ({ canvas, step }) => {
    await step('Should show error message', async () => {
      const item = await canvas.findByText(/Something went wrong!/i)
      await expect(item).toBeInTheDocument()
    })
  },
})
