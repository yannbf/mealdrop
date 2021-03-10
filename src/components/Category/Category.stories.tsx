import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Category, CategoryProps } from './Category'

export default {
  title: 'Components/Category',
  component: Category,
} as Meta

export const Basic: Story<CategoryProps> = (args) => <Category {...args} />
Basic.args = {
  title: 'Asian',
  photoUrl:
    'https://duyt4h9nfnj50.cloudfront.net/sku/57864fe0d398139ac2175e7457c63954',
}

export const Rounded = Basic.bind({})
Rounded.args = {
  ...Basic.args,
  rounded: true,
}
