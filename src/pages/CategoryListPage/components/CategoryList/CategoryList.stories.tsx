import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CategoryList } from './CategoryList'
import { categories } from '../../../../stub/categories'

export default {
  title: 'Pages/CategoryListPage/Components/CategoryList',
  component: CategoryList,
}as ComponentMeta<typeof CategoryList>

const Template: ComponentStory<typeof CategoryList> = (args) => <CategoryList {...args} />

export const Default = Template.bind({})
Default.args = {
  categories,
}
