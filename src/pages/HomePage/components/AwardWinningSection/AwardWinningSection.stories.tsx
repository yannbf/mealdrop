import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AwardWinningSection } from './AwardWinningSection'

export default {
  title: 'Pages/HomePage/Components/AwardWinningSection',
  component: AwardWinningSection,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AwardWinningSection>

const Template: ComponentStory<typeof AwardWinningSection> = () => <AwardWinningSection />

export const Default = Template.bind({})
