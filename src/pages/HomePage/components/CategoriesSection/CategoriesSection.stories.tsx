import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CategoriesSection } from './CategoriesSection'
import { categories } from '../../../../stub/categories'

export default {
  title: 'Pages/HomePage/Components/CategoriesSection',
  component: CategoriesSection,
  args: {
    categories
  }
}as ComponentMeta<typeof CategoriesSection>

const Template: ComponentStory<typeof CategoriesSection> = (args) => <CategoriesSection {...args} />

export const Default = Template.bind({})
