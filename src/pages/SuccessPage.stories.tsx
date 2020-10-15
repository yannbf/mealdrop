import React from 'react'
import { Story, Meta } from '@storybook/react'

import { SuccessPage } from './SuccessPage'
import { withStore } from '../../.storybook/decorators'

export default {
  title: 'Pages/SuccessPage',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withStore()],
} as Meta

const Template: Story = (args) => <SuccessPage {...args} />

export const Default = Template.bind({})
