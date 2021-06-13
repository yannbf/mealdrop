import { Story, Meta } from '@storybook/react'

import { MultiStepForm } from './MultiStepForm'

export default {
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
} as Meta

const Template: Story = () => <MultiStepForm />

export const Default = Template.bind({})
