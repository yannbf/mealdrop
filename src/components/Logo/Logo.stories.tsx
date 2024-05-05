import { StoryFn, Meta } from '@storybook/react'

import { Logo } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-4821&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} as Meta<typeof Logo>

const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />

export const WithText = Template.bind({})

export const LogoOnlyLarge = Template.bind({})
LogoOnlyLarge.args = {
  large: true,
  logoOnly: true,
}
