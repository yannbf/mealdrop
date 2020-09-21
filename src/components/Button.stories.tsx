import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Clear = Template.bind({})
Clear.args = {
  label: 'Button',
  clear: true,
}
