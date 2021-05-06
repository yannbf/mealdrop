import { Story, Meta } from '@storybook/react'

import { Select, SelectProps } from './Select'

export default {
  title: 'Components/Form/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: ['Burger', 'Pizza', 'Sushi'],
  id: 'select',
  'aria-label': 'food'
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Default.args,
  id: 'select',
  label: 'Select field',
}
