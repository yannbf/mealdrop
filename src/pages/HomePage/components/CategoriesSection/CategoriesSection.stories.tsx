import { StoryFn, Meta } from '@storybook/react'

import { categories } from '../../../../stub/categories'

import { CategoriesSection } from './CategoriesSection'

export default {
  title: 'Pages/HomePage/Components/CategoriesSection',
  component: CategoriesSection,
  args: {
    categories,
  },
} as Meta<typeof CategoriesSection>

const Template: StoryFn<typeof CategoriesSection> = (args) => <CategoriesSection {...args} />

export const Default = Template.bind({})
