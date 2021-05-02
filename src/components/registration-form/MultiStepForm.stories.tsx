import { Story, Meta } from '@storybook/react'

import { MultiStepForm } from './MultiStepForm'

export default {
  title: 'Features/MultiStepForm',
  component: MultiStepForm,
} as Meta

const Template: Story = (args) => <MultiStepForm {...args} />
export const Default = Template.bind({})
Default.args = {
  amountOfSteps: 4,
  currentStep: 1,
}
