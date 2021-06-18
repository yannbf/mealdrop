import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'
import { DefaultTemplate } from '../../templates/PageTemplate'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CategoryListPage>

const Template: ComponentStory<typeof CategoryListPage> = () => (
  <DefaultTemplate>
    <CategoryListPage />
  </DefaultTemplate>
)

export const Default = Template.bind({})
