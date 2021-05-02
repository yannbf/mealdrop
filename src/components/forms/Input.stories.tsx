import { Story, Meta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'Components/Form/Input',
  component: Input,
} as Meta

const Template: Story = (args) => <Input {...args} />

export const Default = Template.bind({})
export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Input field',
}
export const WithHint = Template.bind({})
WithHint.args = {
  label: 'Input field',
  placeholder: 'This is a hint',
}
export const Filled = Template.bind({})
Filled.args = {
  label: 'Input field',
  value: 'Already filled text',
}
