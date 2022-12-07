import { StoryFn, Meta } from '@storybook/react'

import { AwardWinningSection } from './AwardWinningSection'

export default {
  title: 'Pages/HomePage/Components/AwardWinningSection',
  component: AwardWinningSection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof AwardWinningSection>

const Template: StoryFn<typeof AwardWinningSection> = () => <AwardWinningSection />

export const Default = Template.bind({})
