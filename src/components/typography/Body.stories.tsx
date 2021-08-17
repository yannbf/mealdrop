import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Body } from './Body'

export default {
  title: 'Components/Typography/Body',
  component: Body,
  argTypes: {
    children: { controls: 'text' },
    size: { table: { disable: true } },
  },
} as ComponentMeta<typeof Body>

const Template: ComponentStory<typeof Body> = ({ children }) => (
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
