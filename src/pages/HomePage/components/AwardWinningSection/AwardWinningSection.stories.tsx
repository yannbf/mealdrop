import preview from '#.storybook/preview'

import { AwardWinningSection } from './AwardWinningSection'

const meta = preview.meta({
  title: 'Pages/HomePage/Components/AwardWinningSection',
  component: AwardWinningSection,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1682-4910&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

export const Default = meta.story({})
