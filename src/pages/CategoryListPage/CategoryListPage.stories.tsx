import preview from '#.storybook/preview'

import { CategoryListPage } from './CategoryListPage'

const meta = preview.meta({
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=169-365&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

export const Default = meta.story({})
