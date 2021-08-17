import { ComponentStory, ComponentMeta } from '@storybook/react'

import { categories } from '../../../../stub/categories'

import { CategoriesSection } from './CategoriesSection'

export default {
  title: 'Pages/HomePage/Components/CategoriesSection',
  component: CategoriesSection,
  args: {
    categories,
  },
} as ComponentMeta<typeof CategoriesSection>

const Template: ComponentStory<typeof CategoriesSection> = (args) => <CategoriesSection {...args} />

export const Default = Template.bind({})
