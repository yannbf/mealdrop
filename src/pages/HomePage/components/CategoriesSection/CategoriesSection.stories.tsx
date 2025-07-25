import preview from '#.storybook/preview'

import { categories } from '../../../../stub/categories'

import { CategoriesSection } from './CategoriesSection'

const meta = preview.meta({
  title: 'Pages/HomePage/Components/CategoriesSection',
  component: CategoriesSection,
  args: {
    categories,
  },
})

export const Default = meta.story({})
