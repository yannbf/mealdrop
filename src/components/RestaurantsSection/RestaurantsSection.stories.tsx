import { Story, Meta } from '@storybook/react'

import {
  RestaurantsSection,
  RestaurantsSectionProps,
} from './RestaurantsSection'
import { restaurants } from '../../stub/restaurants'

import { rest } from 'msw'

export default {
  title: 'Features/RestaurantsSection',
  component: RestaurantsSection,
} as Meta

const Basic: Story<RestaurantsSectionProps> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Basic.bind({})
Default.args = {
  title: 'Near you',
}
Default.parameters = {
  msw: [
    rest.get(
      'https://blab-290ab.firebaseio.com/restaurants/.json',
      (req, res, ctx) => {
        return res(ctx.json(restaurants))
      }
    ),
  ],
}

export const Loading = Basic.bind({})
Loading.args = {
  ...Default.args
}
Loading.parameters = {
  msw: [
    rest.get(
      'https://blab-290ab.firebaseio.com/restaurants/.json',
      (req, res, ctx) => {
        return res(ctx.delay('infinite'))
      }
    ),
  ],
}