import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CategoriesSection, CategoriesSectionProps } from './CategoriesSection'
import { categories } from '../stub/categories'

export default {
  title: 'CategoriesSection',
  component: CategoriesSection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Basic: Story<CategoriesSectionProps> = (args) => (
  <CategoriesSection {...args} />
)

export const Default = Basic.bind({})
Default.args = {
  categories,
}
