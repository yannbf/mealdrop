import { Story, Meta } from '@storybook/react'

import { StepIndicator, StepIndicatorProps } from './StepIndicator'

export default {
  title: 'Components/StepIndicator',
  component: StepIndicator,
} as Meta

const Template: Story<StepIndicatorProps> = (args) => (
  <StepIndicator {...args} />
)
export const Default = Template.bind({})
Default.args = {
  amountOfSteps: 4,
  currentStep: 1,
}
