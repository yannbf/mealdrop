import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CategoryListPage>

const Template: ComponentStory<typeof CategoryListPage> = () => <CategoryListPage />

export const Default = Template.bind({})
