import React from 'react'
import { Story, Meta } from '@storybook/react'

import { HomePage } from './HomePage'
import { withStore } from '../../.storybook/decorators'
import { DefaultTemplate } from '../templates/PageTemplate'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withStore()]
} as Meta

const Template: Story = (args) => (
  <DefaultTemplate>
    <HomePage {...args} />
  </DefaultTemplate>
)

export const Default = Template.bind({})
