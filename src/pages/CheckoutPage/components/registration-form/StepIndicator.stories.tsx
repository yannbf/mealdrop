import { ComponentStoryFn, ComponentMeta } from '@storybook/react'

import { StepIndicator } from './StepIndicator'

export default {
  title: 'Pages/CheckoutPage/Components/StepIndicator',
  component: StepIndicator,
} as ComponentMeta<typeof StepIndicator>

const Template: ComponentStoryFn<typeof StepIndicator> = (args) => <StepIndicator {...args} />
export const Default = Template.bind({})
Default.args = {
  title: 'Step',
  amountOfSteps: 4,
  currentStep: 1,
}
