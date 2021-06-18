import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const WithText = Template.bind({})

export const LogoOnlyLarge = Template.bind({})
LogoOnlyLarge.args = {
  large: true,
  logoOnly: true,
}
