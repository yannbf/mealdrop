import { Story, Meta } from '@storybook/react'
import React from 'react'

import { Select, SelectProps } from './Select'

export default {
  title: 'Components/Form/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: ['Burger', 'Pizza', 'Sushi'],
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Default.args,
  label: 'Select field',
}
