import { StoryFn, Meta } from '@storybook/react'

import { categories } from '../../../../stub/categories'

import { CategoryList } from './CategoryList'

export default {
  title: 'Pages/CategoryListPage/Components/CategoryList',
  component: CategoryList,
} as Meta<typeof CategoryList>

const Template: StoryFn<typeof CategoryList> = (args) => <CategoryList {...args} />

export const Default = Template.bind({})
Default.args = {
  categories,
}
