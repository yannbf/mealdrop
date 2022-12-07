import { StoryFn, Meta } from '@storybook/react'

import { IconButton } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
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
