import { Story, Meta } from '@storybook/react'

import { CategoriesSection, CategoriesSectionProps } from './CategoriesSection'
import { categories } from '../../../../stub/categories'

export default {
  title: 'Pages/HomePage/Components/CategoriesSection',
  component: CategoriesSection,
  args: {
    categories
  }
} as Meta<CategoriesSectionProps>

const Template: Story<CategoriesSectionProps> = (args) => <CategoriesSection {...args} />

export const Default = Template.bind({})
