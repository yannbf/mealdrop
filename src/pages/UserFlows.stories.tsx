import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { within, userEvent, expect } from '@storybook/test'

import { BASE_URL } from '../api'
import { restaurants } from '../stub/restaurants'
import { animatedUserEventClick } from '../../.storybook/interaction'
import { withDeeplink } from '../../.storybook/withDeeplink'

const meta = {
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
} satisfies Meta<{ demoMode: boolean }>
export default meta

type Story = StoryObj<{ demoMode: boolean }>

export const Home = {}

export const ToCategoryListPage = {
  play: async ({ canvasElement, args, step }) => {
    const clickEvent = args.demoMode === true ? animatedUserEventClick : userEvent.click
    const canvas = within(canvasElement)
    await step('Visit Restaurants page', async () => {
      await clickEvent(canvas.getByText('View all restaurants'))
    })
  },
} satisfies Story

export const ToCategoryDetailPage = {
  play: async (context) => {
    await ToCategoryListPage.play(context)
    const { canvasElement, args, step } = context

    const clickEvent = args.demoMode === true ? animatedUserEventClick : userEvent.click
    const canvas = within(canvasElement)
    await step('Select "Burgers" category', async () => {
      await clickEvent(canvas.getByTestId('Burgers'))
    })
  },
} satisfies Story

export const ToRestaurantDetailPage = {
  play: async (context) => {
    await ToCategoryDetailPage.play(context)
    const { canvasElement, args, step } = context

    const clickEvent = args.demoMode === true ? animatedUserEventClick : userEvent.click
    const canvas = within(canvasElement)

    await step('Select first restaurant from the list', async () => {
      // await waitForElementToBeRemoved(canvas.getAllByTestId('loading'))
      await clickEvent((await canvas.findAllByTestId('restaurant-card'))[0])
    })
  },
} satisfies Story

export const ToCheckoutPage = {
  play: async (context) => {
    await ToRestaurantDetailPage.play(context)
    const { canvasElement, args, step } = context

    const clickEvent = args.demoMode === true ? animatedUserEventClick : userEvent.click
    const canvas = within(canvasElement)

    // await waitFor(async () => {
    //   // await expect(canvas.getByText('Looking for some food...')).not.toBeInTheDocument()
    //   await waitForElementToBeRemoved(canvas.getByText('Looking for some food...'))
    // })

    await step('Add Cheeseburger to cart', async () => {
      const foodItem = await canvas.findByText(/Cheeseburger/i)
      await clickEvent(foodItem)

      const modalButton = await canvas.findByLabelText('increase quantity by one')
      await clickEvent(modalButton)
      await clickEvent(canvas.getByLabelText('confirm'))

      const cheeseburgerItem = within(foodItem.parentElement!)

      await expect(cheeseburgerItem.getByLabelText('food quantity').textContent).toEqual('2')
    })

    await step('Sidebar should contain 2 items', async () => {
      await clickEvent(canvas.getByLabelText('food cart'))
      const sidebar = await within(canvasElement).findByTestId('sidebar')

      const foodItemSelector: HTMLSelectElement = within(sidebar).getByRole('combobox')
      await expect(foodItemSelector.value).toEqual('2')
    })

    await step('Go to "Checkout" page', async () => {
      await clickEvent(canvas.getByText(/checkout/i))
    })
  },
} satisfies Story

export const ToSuccessPage = {
  play: async (context) => {
    await ToCheckoutPage.play(context)
    const { canvasElement, args, step } = context

    const clickEvent = args.demoMode === true ? animatedUserEventClick : userEvent.click
    const delay = args.demoMode === true ? 50 : 0
    const canvas = within(canvasElement)

    await step('Fill in user details', async () => {
      await userEvent.type(canvas.getByLabelText('First name'), 'Jane', { delay })
      await userEvent.type(canvas.getByLabelText('Last name'), 'Dough', { delay })
      await userEvent.type(canvas.getByLabelText('Email'), 'jane@dough.com', { delay })
      await userEvent.type(canvas.getByLabelText('Phone number'), '0612345678', { delay })
    })

    await step('Go to the next step', async () => {
      await clickEvent(canvas.getByText(/Next/i))
    })

    await step('Fill in delivery details', async () => {
      await userEvent.type(canvas.getByLabelText('Streetname and housenumber'), 'Somestreet 14', {
        delay,
      })
      await userEvent.type(canvas.getByLabelText('Postcode'), '1043DX', { delay })
      await userEvent.type(canvas.getByLabelText('City'), 'Amsterdam', { delay })
    })

    await step('Complete order', async () => {
      await clickEvent(canvas.getByText(/Complete/i))
    })
  },
} satisfies Story

// export const EndToEnd: Story = {
//   ...ToSuccessPage,
//   args: {
//     demoMode: true,
//   },
// }
