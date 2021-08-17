import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'Components/Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  'aria-label': 'input',
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  id: 'input',
  label: 'Input field',
}
export const WithHint = Template.bind({})
WithHint.args = {
  ...WithLabel.args,
  placeholder: 'This is a hint',
}
export const Filled = Template.bind({})
Filled.args = {
  ...WithLabel.args,
  value: 'Already filled text',
  onChange: () => {},
}
