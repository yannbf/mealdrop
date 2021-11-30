import { ComponentStory, ComponentMeta } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1126%3A3893',
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
} as ComponentMeta<typeof RestaurantCard>

const Template: ComponentStory<typeof RestaurantCard> = (args) => <RestaurantCard {...args} />

export const Default = Template.bind({})
Default.args = {
  ...restaurants[0],
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
