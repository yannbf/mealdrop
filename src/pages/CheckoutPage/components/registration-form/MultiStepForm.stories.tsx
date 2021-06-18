import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MultiStepForm } from './MultiStepForm'

export default {
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
} as ComponentMeta<typeof MultiStepForm>

const Template: ComponentStory<typeof MultiStepForm> = () => <MultiStepForm />

export const Default = Template.bind({})
