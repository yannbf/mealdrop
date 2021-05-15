import { Story, Meta } from '@storybook/react'

import { RestaurantCard, RestaurantCardProps } from './RestaurantCard'
import { restaurants } from '../../stub/restaurants'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'experimental-figspec',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=332%3A1644',
    },
  },
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} as Meta

const Template: Story<RestaurantCardProps> = (args) => <RestaurantCard {...args} />

export const Default = Template.bind({})
Default.args = {
  ...restaurants[0]
}

export const New = Template.bind({})
New.args = {
  ...Default.args,
  isNew: true,
}

export const Closed = Template.bind({})
Closed.args = {
  ...Default.args,
  isClosed: true,
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
