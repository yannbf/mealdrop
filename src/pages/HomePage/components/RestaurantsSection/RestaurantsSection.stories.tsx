import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { BASE_URL } from '../../../../api'
import { restaurants } from '../../../../stub/restaurants'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favorite picks',
}
Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
}
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}
