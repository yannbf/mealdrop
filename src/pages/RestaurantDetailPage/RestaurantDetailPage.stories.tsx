import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { RestaurantDetailPage } from './RestaurantDetailPage'
import { StickyHeaderTemplate } from '../../templates/PageTemplate'
import { restaurants } from '../../stub/restaurants'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=169%3A510',
    },
    deeplink: {
      route: '/restaurants/1',
      path: '/restaurants/:id'
    }
  },
} as ComponentMeta<typeof RestaurantDetailPage>

const REQUEST_URL = 'https://blab-290ab.firebaseio.com/restaurants/:id/.json'

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
  msw: [
    rest.get(
      REQUEST_URL,
      (req, res, ctx) => {
        return res(ctx.json(restaurants[0]))
      }
    ),
  ],
}

export const NotFound = Template.bind({})
NotFound.parameters = {
  msw: [
    rest.get(
      REQUEST_URL,
      (req, res, ctx) => {
        return res(
          ctx.status(404)
        )
      }
    ),
  ],
}

export const Error = Template.bind({})
Error.parameters = {
  msw: [
    rest.get(
      REQUEST_URL,
      (req, res, ctx) => {
        return res(
          ctx.status(500)
        )
      }
    ),
  ],
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: [
    rest.get(
      REQUEST_URL,
      (req, res, ctx) => {
        return res(ctx.delay('infinite'))
      }
    ),
  ],
}
