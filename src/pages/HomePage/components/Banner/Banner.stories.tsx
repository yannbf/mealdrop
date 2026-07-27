import type { Meta, StoryObj } from '@storybook/react-vite'

import { Banner } from './Banner'

const meta = {
  title: 'Pages/HomePage/Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1690-5067&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Desktop: Story = {}

export const Mobile: Story = {
  // Storybook 10's viewport global isn't applied by Chromatic at capture time,
  // so pin the capture width explicitly to the iphonex viewport (375px).
  parameters: {
    chromatic: { viewports: [375] },
  },
  globals: {
    viewport: { value: 'iphonex', isRotated: false },
  },
}
