import { StoryFn, Meta } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3572&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

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
