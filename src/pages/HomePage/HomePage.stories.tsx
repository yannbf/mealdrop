import React from 'react'
import { Story, Meta } from '@storybook/react'

import { HomePage } from './HomePage'
import { withStore } from '../../../.storybook/decorators'
import { DefaultTemplate } from '../../templates/PageTemplate'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/proto/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=135%3A258&viewport=319%2C422%2C0.06356501579284668&scaling=scale-down',
    },
  },
  decorators: [withStore()],
} as Meta

const Template: Story = (args) => (
  <DefaultTemplate>
    <HomePage {...args} />
  </DefaultTemplate>
)

export const Default = Template.bind({})
