import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'
import { withStore } from '../../.storybook/decorators'
import { DefaultTemplate } from '../templates/PageTemplate'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withStore()]
} as Meta

const Template: Story = (args) => (
  <DefaultTemplate>
    <CategoryListPage {...args} />
  </DefaultTemplate>
)

export const Default = Template.bind({})
