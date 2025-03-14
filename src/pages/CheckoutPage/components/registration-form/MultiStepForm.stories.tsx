import type { Meta, StoryObj } from '@storybook/react'

import { MultiStepForm } from './MultiStepForm'

const meta = {
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
} satisfies Meta<typeof MultiStepForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
