import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from './Heading'

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  argTypes: {
    children: { controls: 'text' },
    level: { table: { disable: true } },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({ children }) => (
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
