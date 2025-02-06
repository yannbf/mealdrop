import preview from "../../../.storybook/preview";

import { Footer } from './Footer'

const meta = preview.meta({
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1716-3158&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
})

export const Default = meta.story({})
