import { StoryFn, Meta } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Mealdrop?node-id=780%3A2938',
    },
  },
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Comfort food',
}
