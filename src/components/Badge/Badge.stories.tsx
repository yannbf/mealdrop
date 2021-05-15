import { Story, Meta } from '@storybook/react'

import { Badge, BadgeProps } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'experimental-figspec',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Mealdrop?node-id=780%3A2938',
    },
  },
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hamburgers',
}
