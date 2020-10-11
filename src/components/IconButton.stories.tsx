import React from 'react'
import { Story, Meta } from '@storybook/react'

import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'arrow-right',
  small: false,
}

export const Small = Template.bind({})
Small.args = {
  ...Default.args,
  small: true,
}
