import type { Meta, StoryObj } from '@storybook/react-vite'

import { AwardWinningSection } from './AwardWinningSection'

const meta = {
  title: 'Pages/HomePage/Components/AwardWinningSection',
  component: AwardWinningSection,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1682-4910&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} satisfies Meta<typeof AwardWinningSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
