import preview from '#.storybook/preview'

import { Banner } from './Banner'

const meta = preview.meta({
  title: 'Pages/HomePage/Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1690-5067&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

export const Desktop = meta.story({})

export const Mobile = meta.story({
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
})
