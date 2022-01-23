import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'

import { RestaurantDetailPage } from './RestaurantDetailPage'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    deeplink: {
      path: '/restaurants/:id',
      route: '/restaurants/1',
    },
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const Template: ComponentStory<typeof RestaurantDetailPage> = () => (
  <>
    <RestaurantDetailPage />
    <div id="modal" />
  </>
)

export const Success = Template.bind({})
Success.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169%3A510',
  },
  msw: [
    rest.get(BASE_URL, (req, res, ctx) => {
      return res(ctx.json(restaurants[0]))
    }),
  ],
}

export const Loading = Template.bind({})
Loading.parameters = {
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
}

export const NotFound = Template.bind({})
NotFound.parameters = {
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
}

export const Error = Template.bind({})
Error.parameters = {
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
}
