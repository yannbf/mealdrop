import preview from "../../../../../.storybook/preview";

import { StepIndicator } from './StepIndicator'

const meta = preview.meta({
  title: 'Pages/CheckoutPage/Components/StepIndicator',
  component: StepIndicator,
})

export const Default = meta.story({
  args: {
    title: 'Step',
    amountOfSteps: 4,
    currentStep: 1,
  },
})
