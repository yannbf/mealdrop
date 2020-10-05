import { Story } from '@storybook/react'
import React from 'react'

import { Select, SelectProps } from './Select'

export default {
  title: 'Components/Form/Select',
  component: Select,
}

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: ['one', 'two', 'three'],
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Default.args,
  label: 'Select field',
}
