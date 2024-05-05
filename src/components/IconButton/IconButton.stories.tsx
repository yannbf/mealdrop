import { StoryFn, Meta } from '@storybook/react'

import { IconButton } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1131-437&mode=design&t=zmyrZnTzOLfLqBwr-4',
  },
} as Meta<typeof IconButton>

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'arrow-right',
  small: false,
  'aria-label': 'forward',
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  small: true,
}
