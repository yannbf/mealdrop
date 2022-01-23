import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favorite picks',
}
