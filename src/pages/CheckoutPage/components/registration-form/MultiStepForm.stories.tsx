import { StoryFn, Meta } from '@storybook/react'

import { MultiStepForm } from './MultiStepForm'

export default {
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
} as Meta<typeof MultiStepForm>

const Template: StoryFn<typeof MultiStepForm> = () => <MultiStepForm />

export const Default = Template.bind({})
