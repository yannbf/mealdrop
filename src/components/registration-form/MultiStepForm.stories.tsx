import { Story } from '@storybook/react'
import React from 'react'

import { MultiStepForm } from './MultiStepForm'

export default {
  title: 'Features/MultiStepForm',
  component: MultiStepForm,
}

const Template: Story = (args) => <MultiStepForm {...args} />
export const Default = Template.bind({})
Default.args = {
  amountOfSteps: 4,
  currentStep: 1,
}
