import { StoryFn, Meta } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-3229&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

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
