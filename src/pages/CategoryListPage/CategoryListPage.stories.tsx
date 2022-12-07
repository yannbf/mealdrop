import { StoryFn, Meta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof CategoryListPage>

const Template: StoryFn<typeof CategoryListPage> = () => <CategoryListPage />

export const Default = Template.bind({})
