import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Category } from './Category'

export default {
  title: 'Components/Category',
  component: Category,
} as ComponentMeta<typeof Category>

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Pizza',
  photoUrl: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550',
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Default.args,
  rounded: true,
}
