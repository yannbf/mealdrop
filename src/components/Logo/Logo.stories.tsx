import type { Meta, StoryObj } from '@storybook/react-vite'

import { Logo } from './Logo'

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-4821&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const WithText: Story = {}

export const LogoOnly: Story = {
  args: {
    large: true,
    logoOnly: true,
  },
}

export const Animated: Story = {
  args: {
    large: true,
    logoOnly: true,
    animated: true,
  },
}
