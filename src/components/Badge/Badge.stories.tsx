import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Badge, BadgeProps } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

const Basic: Story<BadgeProps> = (args) => <Badge {...args} />

export const Default = Basic.bind({})
Default.args = {
  text: 'Hamburgers',
}
