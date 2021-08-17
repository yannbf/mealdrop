import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'Components/Form/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: ['Burger', 'Pizza', 'Sushi'],
  id: 'select',
  'aria-label': 'food',
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  ...Default.args,
  id: 'select',
  label: 'Select field',
}
