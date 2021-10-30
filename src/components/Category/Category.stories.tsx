import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Category } from './Category'

export default {
  title: 'Components/Category',
  component: Category,
  args: {
    title: 'Pizza',
    photoUrl:
      'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550',
  },
} as ComponentMeta<typeof Category>

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />

export const Default = Template.bind({})
Default.parameters = {
  zeplinLink: 'zpl://screen?pid=604b5aa98e9f038b21a17ea8&sid=604b5d67576ae18b2fc38f88',
}

export const Rounded = Template.bind({})
Rounded.args = {
  round: true,
}
