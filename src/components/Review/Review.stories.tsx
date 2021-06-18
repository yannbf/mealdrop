import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Review } from './Review'

export default {
  title: 'Components/Review',
  component: Review,
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
} as ComponentMeta<typeof Review>

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />

export const Excellent = Template.bind({})
Excellent.args = {
  rating: 5,
}
