import { Story, Meta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'
import { DefaultTemplate } from '../../templates/PageTemplate'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = () => (
  <DefaultTemplate>
    <CategoryListPage />
  </DefaultTemplate>
)

export const Default = Template.bind({})
