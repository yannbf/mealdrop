import { Story, Meta } from '@storybook/react'

import { CategoryList, CategoryListProps } from './CategoryList'
import { categories } from '../../stub/categories'

export default {
  title: 'Components/CategoryList',
  component: CategoryList,
} as Meta

const Template: Story<CategoryListProps> = (args) => <CategoryList {...args} />

export const Default = Template.bind({})
Default.args = {
  categories,
}
