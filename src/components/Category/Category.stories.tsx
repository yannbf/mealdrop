import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Category, CategoryProps } from './Category'

export default {
  title: 'Components/Category',
  component: Category,
} as Meta

export const Basic: Story<CategoryProps> = (args) => <Category {...args} />
Basic.args = {
  title: 'Pizza',
  photoUrl:
    'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550',
}

export const Rounded = Basic.bind({})
Rounded.args = {
  ...Basic.args,
  rounded: true,
}
