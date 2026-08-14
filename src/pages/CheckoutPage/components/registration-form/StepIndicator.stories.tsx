import type { Meta, StoryObj } from '@storybook/react-vite'

import { StepIndicator } from './StepIndicator'

const meta = {
  title: 'Pages/CheckoutPage/Components/StepIndicator',
  component: StepIndicator,
} satisfies Meta<typeof StepIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Step',
    amountOfSteps: 4,
    currentStep: 1,
  },
}
