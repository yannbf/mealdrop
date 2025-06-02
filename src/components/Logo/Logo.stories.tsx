import preview from '#.storybook/preview'

import { Logo } from './Logo'

const meta = preview.meta({
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-4821&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

export const WithText = meta.story()

export const LogoOnly = meta.story({
  args: {
    large: true,
    logoOnly: true,
  },
})
