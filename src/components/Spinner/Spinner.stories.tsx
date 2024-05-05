import { StoryFn, Meta } from '@storybook/react'

import { Spinner } from './Spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'fullscreen',
    chromatic: { delay: 1200 },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=12703-2132&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} as Meta<typeof Spinner>

export const Default: StoryFn<typeof Spinner> = () => (
  <div style={{ minHeight: '100vh' }}>
    <Spinner />
  </div>
)
