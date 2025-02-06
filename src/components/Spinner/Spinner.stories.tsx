import preview from "../../../.storybook/preview";

import { Spinner } from './Spinner'

const meta = preview.meta({
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
})

export const Default = meta.story({
  render: () => (
    <div style={{ minHeight: '100vh' }}>
      <Spinner />
    </div>
  ),
})
