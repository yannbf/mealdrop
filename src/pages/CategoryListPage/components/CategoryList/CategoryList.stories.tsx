import type { Meta, StoryObj } from '@storybook/react-vite'

import { categories } from '../../../../stub/categories'

import { CategoryList } from './CategoryList'

const meta = {
  title: 'Pages/CategoryListPage/Components/CategoryList',
  component: CategoryList,
} satisfies Meta<typeof CategoryList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    categories,
  },
}
