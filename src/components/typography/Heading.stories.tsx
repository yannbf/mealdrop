import { Story } from '@storybook/react'
import React from 'react'

import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  argTypes: {
    children: { controls: 'text' },
    level: { table: { disable: true } },
  },
}

const Template: Story<HeadingProps> = ({ children }) => (
  <div>
    <Heading>{children || 'Heading 1'}</Heading>
    <Heading level={2}>{children || 'Heading 2'}</Heading>
    <Heading level={3}>{children || 'Heading 3'}</Heading>
    <Heading level={4}>{children || 'Heading 4'}</Heading>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: '',
}
