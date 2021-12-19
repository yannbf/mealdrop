import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageTemplate } from '../../templates/PageTemplate'

import { CategoryListPage } from './CategoryListPage'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CategoryListPage>

const Template: ComponentStory<typeof CategoryListPage> = () => (
  <PageTemplate>
    <CategoryListPage />
  </PageTemplate>
)

export const Default = Template.bind({})
