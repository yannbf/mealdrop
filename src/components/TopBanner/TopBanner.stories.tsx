import preview from '#.storybook/preview'

import { TopBanner } from './TopBanner'

const meta = preview.meta({
  title: 'Components/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1690-5067&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

export const Default = meta.story({
  args: {
    title: 'Categories',
  },
})

export const WithImage = meta.story({
  args: {
    ...Default.input.args,
    photoUrl:
      'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=20',
  },
})
