import type { Meta, StoryObj } from '@storybook/react-vite'

import { CategoryListPage } from './CategoryListPage'

const meta = {
  title: 'Pages/CategoryListPage',
  component: CategoryListPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=169-365&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} satisfies Meta<typeof CategoryListPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
