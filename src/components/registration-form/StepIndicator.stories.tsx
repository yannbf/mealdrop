import { Story } from '@storybook/react'
import React from 'react'

import { StepIndicator, StepIndicatorProps } from './StepIndicator'

export default {
  title: 'Components/StepIndicator',
  component: StepIndicator,
}

const Template: Story<StepIndicatorProps> = (args) => (
  <StepIndicator {...args} />
)
export const Default = Template.bind({})
Default.args = {
  amountOfSteps: 4,
  currentStep: 1,
}
