import preview from '#.storybook/preview'
import { expect, waitFor } from 'storybook/test'

import { MultiStepForm } from './MultiStepForm'

const meta = preview.meta({
  title: 'Pages/CheckoutPage/Components/MultiStepForm',
  component: MultiStepForm,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=426-3309&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

const tick = async (ms: number = 1) => new Promise((resolve) => setTimeout(resolve, ms))

export const Default = meta.story({})
Default.test('should validate email field', async ({ canvas, userEvent }) => {
  const emailInput = await canvas.findByLabelText('Email')
  await userEvent.type(emailInput, 'invalid@email')

  // if there's no delay the button click happens too fast and the test fails
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(await canvas.findByText(/Please enter a valid email address/)).toBeInTheDocument()

  await userEvent.clear(emailInput)
  await userEvent.type(emailInput, 'valid@email.com')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(canvas.queryByText(/Please enter a valid email address/)).not.toBeInTheDocument()
})
Default.test('should validate phone field', async ({ canvas, userEvent }) => {
  const phoneInput = await canvas.findByLabelText('Phone number')
  await userEvent.type(phoneInput, '1234567890')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(canvas.queryByText(/Please enter a valid phone number/)).not.toBeInTheDocument()
})
