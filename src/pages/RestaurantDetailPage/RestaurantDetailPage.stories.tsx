import React from 'react'
import { Story, Meta } from '@storybook/react'

import { RestaurantDetailPage } from './RestaurantDetailPage'
import { withSpecificRoute, withStore } from '../../../.storybook/decorators'
import { StickyHeaderTemplate } from '../../templates/PageTemplate'

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=169%3A510',
    },
  },
  decorators: [
    withSpecificRoute({ route: '/restaurants/1', path: '/restaurants/:id' }),
    withStore(),
  ],
} as Meta

const Template: Story = (args) => (
  <div>
    <div id="modal" />
    <StickyHeaderTemplate>
      <RestaurantDetailPage {...args} />
    </StickyHeaderTemplate>
  </div>
)

export const Default = Template.bind({})
