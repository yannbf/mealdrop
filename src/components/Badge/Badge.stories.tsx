import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Comfort food',
}

export const LightTheme = Template.bind({})
LightTheme.args = Default.args
LightTheme.parameters = {
  theme: 'light',
}

export const DarkTheme = Template.bind({})
DarkTheme.args = Default.args
DarkTheme.parameters = {
  theme: 'dark',
}
