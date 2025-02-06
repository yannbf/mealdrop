import preview from "../../../../../.storybook/preview";

import { categories } from '../../../../stub/categories'

import { CategoryList } from './CategoryList'

const meta = preview.meta({
  title: 'Pages/CategoryListPage/Components/CategoryList',
  component: CategoryList,
})

export const Default = meta.story({
  args: {
    categories,
  },
})
