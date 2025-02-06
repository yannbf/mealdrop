import preview from "../../.storybook/preview";
import { http, HttpResponse } from 'msw'
import { within, expect } from '@storybook/test'

import { BASE_URL } from '../api'
import { restaurants } from '../stub/restaurants'
import { withDeeplink } from '../../.storybook/withDeeplink'

const meta = preview.meta({
  title: 'UserFlows/App',
  component: () => <></>,
  parameters: {
    layout: 'fullscreen',
    deeplink: { route: '/', path: '/' },
    msw: {
      handlers: [
        http.get(BASE_URL, ({ request }) => {
          const url = new URL(request.url)
          const id = url.searchParams.get('id')
          const category = url.searchParams.get('category')

          if (id) {
            return HttpResponse.json(restaurants[0])
          }

          if (category) {
            return HttpResponse.json([restaurants[0], restaurants[1], restaurants[2]])
          }

          return HttpResponse.json(restaurants)
        }),
      ],
    },
  },
  decorators: [withDeeplink],
  argTypes: {
    demoMode: {
      control: { type: 'boolean' },
    },
  },
  args: {
    demoMode: false,
  }
})

export const Home = meta.story({})

export const ToCategoryListPage = meta.story({
  play: async ({ canvasElement, step, userEvent }) => {
    const canvas = within(canvasElement)
    await step('Visit Restaurants page', async () => {
      await userEvent.click(canvas.getByText('View all restaurants'))
    })
  },
})

export const ToCategoryDetailPage = meta.story({
  play: async (context) => {
    await ToCategoryListPage.play(context)
    const { canvasElement, step, userEvent } = context

    const canvas = within(canvasElement)
    await step('Select "Burgers" category', async () => {
      await userEvent.click(canvas.getByTestId('Burgers'))
    })
  },
})

export const ToRestaurantDetailPage = meta.story({
  play: async (context) => {
    await ToCategoryDetailPage.play(context)
    const { canvasElement, step, userEvent } = context

    const canvas = within(canvasElement)

    await step('Select first restaurant from the list', async () => {
      // await waitForElementToBeRemoved(canvas.getAllByTestId('loading'))
      await userEvent.click((await canvas.findAllByTestId('restaurant-card'))[0])
    })
  },
})

export const ToCheckoutPage = meta.story({
  play: async (context) => {
    await ToRestaurantDetailPage.play(context)
    const { canvasElement, userEvent, step } = context

    const canvas = within(canvasElement)

    // await waitFor(async () => {
    //   // await expect(canvas.getByText('Looking for some food...')).not.toBeInTheDocument()
    //   await waitForElementToBeRemoved(canvas.getByText('Looking for some food...'))
    // })

    await step('Add Cheeseburger to cart', async () => {
      const foodItem = await canvas.findByText(/Cheeseburger/i)
      await userEvent.click(foodItem)

      const modalButton = await canvas.findByLabelText('increase quantity by one')
      await userEvent.click(modalButton)
      await userEvent.click(canvas.getByLabelText('confirm'))

      const cheeseburgerItem = within(foodItem.parentElement!)

      await expect(cheeseburgerItem.getByLabelText('food quantity').textContent).toEqual('2')
    })

    await step('Sidebar should contain 2 items', async () => {
      await userEvent.click(canvas.getByLabelText('food cart'))
      const sidebar = await within(canvasElement).findByTestId('sidebar')

      const foodItemSelector: HTMLSelectElement = within(sidebar).getByRole('combobox')
      await expect(foodItemSelector.value).toEqual('2')
    })

    await step('Go to "Checkout" page', async () => {
      await userEvent.click(canvas.getByText(/checkout/i))
    })
  },
})

export const ToSuccessPage = meta.story({
  play: async (context) => {
    await ToCheckoutPage.play(context)
    const { canvas, step, userEvent } = context

    await step('Fill in user details', async () => {
      await userEvent.type(canvas.getByLabelText('First name'), 'Jane')
      await userEvent.type(canvas.getByLabelText('Last name'), 'Dough')
      await userEvent.type(canvas.getByLabelText('Email'), 'jane@dough.com')
      await userEvent.type(canvas.getByLabelText('Phone number'), '0612345678')
    })

    await step('Go to the next step', async () => {
      await userEvent.click(canvas.getByText(/Next/i))
    })

    await step('Fill in delivery details', async () => {
      await userEvent.type(canvas.getByLabelText('Streetname and housenumber'), 'Somestreet 14')
      await userEvent.type(canvas.getByLabelText('Postcode'), '1043DX')
      await userEvent.type(canvas.getByLabelText('City'), 'Amsterdam')
    })

    await step('Complete order', async () => {
      await userEvent.click(canvas.getByText(/Complete/i))
    })
  },
})

export const DemoMode = meta.story({
  ...ToSuccessPage.input,
  args: {
    demoMode: true,
  },
})
