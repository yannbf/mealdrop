import { Story, Meta } from '@storybook/react'

import { AwardWinningSection } from './AwardWinningSection'

export default {
  title: 'Components/AwardWinningSection',
  component: AwardWinningSection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = () => <AwardWinningSection />

export const Default = Template.bind({})