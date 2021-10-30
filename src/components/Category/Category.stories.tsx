import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Category } from './Category'

export default {
  title: 'Components/Category',
  component: Category,
  parameters: {
    constraint: {
      maxWidth: '427px',
    },
  },
  args: {
    title: 'Pizza',
    photoUrl:
      'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550',
  },
} as ComponentMeta<typeof Category>

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />

export const Expanded = Template.bind({})
Expanded.parameters = {
  zeplinLink: 'zpl://components?pid=6171dc280e70279e636ee1e6&coids=6171eaeb46ef4ba549b0cc1f',
}

export const Rounded = Template.bind({})
Rounded.args = {
  round: true,
}
Rounded.parameters = {
  zeplinLink: 'zpl://components?pid=6171dc280e70279e636ee1e6&coids=6171eaeb1dee3593e6d2141c',
}
