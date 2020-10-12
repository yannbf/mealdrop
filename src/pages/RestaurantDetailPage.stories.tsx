import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RestaurantDetailPage } from './RestaurantDetailPage'
import { withSpecificRoute, withStore } from '../../.storybook/decorators'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    withSpecificRoute({ route: '/restaurants/1', path: '/restaurants/:id' }),
    withStore(),
  ],
} as Meta

const Template: Story = (args) => (
  <div>
    <div id="modal" />
    <RestaurantDetailPage {...args} />
  </div>
)

export const Default = Template.bind({})
