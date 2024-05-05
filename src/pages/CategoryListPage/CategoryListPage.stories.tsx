import { StoryFn, Meta } from '@storybook/react'

import { CategoryListPage } from './CategoryListPage'

export default {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=169-365&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} as Meta<typeof CategoryListPage>

const Template: StoryFn<typeof CategoryListPage> = () => <CategoryListPage />

export const Default = Template.bind({})
