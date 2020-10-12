import React from 'react'
import { Story, Meta } from '@storybook/react'

import { HomePage } from './HomePage'
import { withSpecificRoute } from '../../.storybook/decorators'


export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withSpecificRoute()],
} as Meta

const Template: Story = (args) => <HomePage {...args} />

export const Default = Template.bind({})
