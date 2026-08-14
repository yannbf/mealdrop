import type { Meta, StoryObj } from '@storybook/react-vite'

import { categories } from '../../../../stub/categories'

import { CategoriesSection } from './CategoriesSection'

const meta = {
  title: 'Pages/HomePage/Components/CategoriesSection',
  component: CategoriesSection,
  args: {
    categories,
  },
} satisfies Meta<typeof CategoriesSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
