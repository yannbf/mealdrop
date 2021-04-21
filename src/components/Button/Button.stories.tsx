import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Button',
  disabled: true,
}

export const Clear = Template.bind({})
Clear.args = {
  clear: true,
  children: 'Button',
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'cart',
}

export const IconAndText = Template.bind({})
IconAndText.args = {
  icon: 'cart',
  children: (
    <div style={{ paddingLeft: '16px' }}>
      <span style={{ color: '#949494' }}>Order</span>
      <span style={{ color: 'white', paddingLeft: '8px' }}>€ 8</span>
    </div>
  ),
}
