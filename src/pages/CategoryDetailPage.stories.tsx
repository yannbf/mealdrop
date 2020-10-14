import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CategoryDetailPage } from './CategoryDetailPage'
import { withSpecificRoute, withStore } from '../../.storybook/decorators'
import { DefaultTemplate } from '../templates/PageTemplate'

export default {
  title: 'Pages/CategoryDetailPage',
  component: CategoryDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withStore()]
} as Meta

const Template: Story = (args) => (
  <DefaultTemplate>
    <CategoryDetailPage {...args} />
  </DefaultTemplate>
)

export const Default = Template.bind({})
Default.decorators = [
  withSpecificRoute({ route: '/categories/pizza', path: '/categories/:id' }),
]

export const Missing = Template.bind({})
Missing.decorators = [
  withSpecificRoute({ route: '/categories/wrong', path: '/categories/:id' }),
]
