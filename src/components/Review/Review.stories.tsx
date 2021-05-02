import { Story, Meta } from '@storybook/react'

import { Review, ReviewProps } from './Review'

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
} as Meta

const Template: Story<ReviewProps> = (args) => <Review {...args} />

export const Excellent = Template.bind({})
Excellent.args = {
  rating: 5,
}
