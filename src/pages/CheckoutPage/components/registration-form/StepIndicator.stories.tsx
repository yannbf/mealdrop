import { StoryFn, Meta } from '@storybook/react'

import { StepIndicator } from './StepIndicator'

export default {
  title: 'Pages/CheckoutPage/Components/StepIndicator',
  component: StepIndicator,
} as Meta<typeof StepIndicator>

const Template: StoryFn<typeof StepIndicator> = (args) => <StepIndicator {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'Step',
  amountOfSteps: 4,
  currentStep: 1,
}
