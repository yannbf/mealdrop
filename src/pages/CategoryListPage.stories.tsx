import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = (args) => <CategoryListPage {...args} />

export const Default = Template.bind({})
