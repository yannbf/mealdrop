import { Story } from '@storybook/react'
import React from 'react'

import { Input } from './Input'

export default {
  title: 'Components/Form/Input',
  component: Input,
}

const Template: Story = (args) => <Input {...args} />

export const Default = Template.bind({})
export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Input field',
}
export const WithHint = Template.bind({})
WithHint.args = {
  label: 'Input field',
  placeholder: 'bla',
}
export const Filled = Template.bind({})
Filled.args = {
  label: 'Input field',
  value: 'Some text',
}
