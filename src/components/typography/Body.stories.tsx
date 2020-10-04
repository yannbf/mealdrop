import { Story } from '@storybook/react'
import React from 'react'

import { Body, BodyProps } from './Body'

export default {
  title: 'Typography/Body',
  component: Body,
  argTypes: {
    children: { controls: 'text' },
    size: { table: { disable: true } },
  },
}

const Template: Story<BodyProps> = ({ children }) => (
  <div>
    <Body>{children || 'Body'}</Body>
    <Body size="S">{children || 'Body S'}</Body>
    <Body size="XS">{children || 'Body XS'}</Body>
    <Body size="XXS">{children || 'Body XXS'}</Body>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: '',
}
