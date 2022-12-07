import { StoryFn, Meta } from '@storybook/react'

import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta<typeof Logo>

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />

export const WithText = Template.bind({})

export const LogoOnlyLarge = Template.bind({})
LogoOnlyLarge.args = {
  large: true,
  logoOnly: true,
}
