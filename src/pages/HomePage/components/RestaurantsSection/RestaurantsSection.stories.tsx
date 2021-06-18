import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  RestaurantsSection,
} from './RestaurantsSection'
import { restaurants } from '../../../../stub/restaurants'

import { rest } from 'msw'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
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

export const Loading = Template.bind({})
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