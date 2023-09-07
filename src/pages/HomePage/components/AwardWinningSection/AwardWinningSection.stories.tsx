import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AwardWinningSection } from './AwardWinningSection'

export default {
  title: 'Pages/HomePage/Components/AwardWinningSection',
  component: AwardWinningSection,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1682-4910&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
} as ComponentMeta<typeof AwardWinningSection>

const Template: ComponentStory<typeof AwardWinningSection> = () => <AwardWinningSection />

export const Default = Template.bind({})
