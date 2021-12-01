import { ComponentStory, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent, waitForElementToBeRemoved } from '@storybook/testing-library'
import { rest } from 'msw'

import { BASE_URL } from '../../api'
import { StickyHeaderTemplate } from '../../templates/PageTemplate'
import { animatedUserEventClick } from '../../../.storybook/interaction'
import { restaurants } from '../../stub/restaurants'

import { RestaurantDetailPage } from './RestaurantDetailPage'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169%3A510',
    },
    deeplink: {
      route: '/restaurants/1',
      path: '/restaurants/:id',
    },
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const Template: ComponentStory<typeof RestaurantDetailPage> = () => (
  <div>
    <div id="modal" />
    <StickyHeaderTemplate>
      <RestaurantDetailPage />
    </StickyHeaderTemplate>
  </div>
)

export const Success = Template.bind({})
Success.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants[0])))],
  },
}

export const NotFound = Template.bind({})
NotFound.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(404)))],
  },
}

export const Error = Template.bind({})
Error.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(500)))],
  },
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}

export const SelectingAndUpdatingItems = Template.bind({})
SelectingAndUpdatingItems.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants[0])))],
  },
}
SelectingAndUpdatingItems.args = {
  demoMode: false,
}
SelectingAndUpdatingItems.argTypes = {
  demoMode: {
    control: { type: 'boolean' },
  },
}
SelectingAndUpdatingItems.play = async ({ canvasElement, args }) => {
  // @ts-ignore
  const clickEvent = args.demoMode === true ? animatedUserEventClick : userEvent.click
  const canvas = within(canvasElement)

  await waitForElementToBeRemoved(await canvas.findByText('Looking for some food...'))

  const foodItem = await canvas.findByText(/Cheeseburger/i)
  await clickEvent(foodItem)

  const modalButton = await canvas.findByLabelText('increase quantity by one')
  await clickEvent(modalButton)
  await clickEvent(modalButton)
  await clickEvent(canvas.getByLabelText('confirm'))

  const cheeseburgerItem = within(foodItem.parentElement!)

  await expect(cheeseburgerItem.getByLabelText('food quantity').textContent).toEqual('3')

  await clickEvent(canvas.getByLabelText('food cart'))
  const sidebar = await within(canvasElement).findByTestId('sidebar')

  const foodItemSelector: HTMLSelectElement = within(sidebar).getByRole('combobox')
  await expect(foodItemSelector.value).toEqual('3')
  await userEvent.selectOptions(foodItemSelector, '2')

  await clickEvent(canvas.getByLabelText('close sidebar'))
  await expect(cheeseburgerItem.getByLabelText('food quantity').textContent).toEqual('2')
}
SelectingAndUpdatingItems.storyName = '▶️ Selecting and updating items'
