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
      accessToken: process.env.FIGMA_ACCESS_TOKEN,
    },
  },
} as Meta

const Basic: Story<BadgeProps> = (args) => <Badge {...args} />

export const Default = Basic.bind({})
Default.args = {
  text: 'Hamburgers',
}
