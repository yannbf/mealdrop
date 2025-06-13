import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { within, expect } from 'storybook/test'

import { BASE_URL } from '../api'
import { restaurantsCompleteData } from '../stub/restaurants'
import { withDeeplink } from '../../.storybook/withDeeplink'

const meta = {
  title: 'UserFlows/App',
  component: () => <></>,
  parameters: {
    layout: 'fullscreen',
    chromatic: { disable: true },
    deeplink: { route: '/', path: '/' },
    msw: {
      handlers: [
        http.get(BASE_URL, ({ request }) => {
          const url = new URL(request.url)
          const id = url.searchParams.get('id')
          const category = url.searchParams.get('category')

          if (id) {
            return HttpResponse.json(restaurantsCompleteData[0])
          }

          if (category) {
            return HttpResponse.json([
              restaurantsCompleteData[0],
              restaurantsCompleteData[1],
              restaurantsCompleteData[2],
            ])
          }

          return HttpResponse.json(restaurantsCompleteData)
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
} satisfies Meta<{ demoMode: boolean }>
export default meta

type Story = StoryObj<{ demoMode: boolean }>

export const Home = {}

export const ToCategoryListPage = {
  play: async ({ canvasElement, step, userEvent }) => {
    const canvas = within(canvasElement)
    await step('Visit Restaurants page', async () => {
      await userEvent.click(canvas.getByText('View all restaurants'))
    })
  },
} satisfies Story

export const ToCategoryDetailPage = {
  play: async (context) => {
    await ToCategoryListPage.play(context)
    const { canvasElement, step, userEvent } = context

    const canvas = within(canvasElement)
    await step('Select "Burgers" category', async () => {
      await userEvent.click(canvas.getByTestId('Burgers'))
    })
  },
} satisfies Story

export const ToRestaurantDetailPage = {
  play: async (context) => {
    await ToCategoryDetailPage.play(context)
    const { canvasElement, step, userEvent } = context

    const canvas = within(canvasElement)

    await step('Select first restaurant from the list', async () => {
      // await waitForElementToBeRemoved(canvas.getAllByTestId('loading'))
      const restaurantCards = await canvas.findAllByTestId('restaurant-card')
      await userEvent.click(restaurantCards[0])
    })
  },
} satisfies Story

export const ToCheckoutPage = {
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
} satisfies Story

export const ToSuccessPage = {
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
} satisfies Story

export const DemoMode: Story = {
  ...ToSuccessPage,
  args: {
    demoMode: true,
  },
}
