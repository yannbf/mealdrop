import { ComponentStory, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'
import { rest } from 'msw'

import { BASE_URL } from '../../api'
import { StickyHeaderTemplate } from '../../templates/PageTemplate'
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
  msw: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants[0])))],
}

export const NotFound = Template.bind({})
NotFound.parameters = {
  msw: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(404)))],
}

export const Error = Template.bind({})
Error.parameters = {
  msw: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(500)))],
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
}

export const WithModalOpen = Template.bind({})
WithModalOpen.parameters = {
  msw: [rest.get(REQUEST_URL, (req, res, ctx) => res(ctx.json(restaurants[0])))],
}
WithModalOpen.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const foodItem = await canvas.findByText(/Cheeseburger/i)
  await userEvent.click(foodItem)

  const modalButton = await canvas.findByLabelText('increase quantity by one')
  await userEvent.click(modalButton)
  await userEvent.click(modalButton)

  expect(within(foodItem.parentElement!).getByLabelText('food quantity').textContent).toEqual('3')
}
