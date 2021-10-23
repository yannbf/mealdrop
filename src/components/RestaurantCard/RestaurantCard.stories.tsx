import { ComponentStory, ComponentMeta } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'experimental-figspec',
      url: 'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=332%3A1644',
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
Default.parameters = {
  zeplinLink: 'zpl://components?pid=6171dc280e70279e636ee1e6&coid=6171ec43eb76ea9f8728f40f',
}

export const New = Template.bind({})
New.args = {
  ...Default.args,
  isNew: true,
}
New.parameters = {
  zeplinLink: 'zpl://components?pid=6171dc280e70279e636ee1e6&coid=6171ec44863e56947edf3a87',
}

export const Closed = Template.bind({})
Closed.args = {
  ...Default.args,
  isClosed: true,
}
Closed.parameters = {
  zeplinLink: 'zpl://components?pid=6171dc280e70279e636ee1e6&coid=6171ec44534f14a185da3d90',
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
Loading.parameters = {
  zeplinLink: 'zpl://components?pid=6171dc280e70279e636ee1e6&coid=6171ec4505b3899ec4cbc333',
}
