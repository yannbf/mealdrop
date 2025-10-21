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

Default.test('should validate invalid phone field', async ({ canvas, userEvent }) => {
  const phoneInput = await canvas.findByLabelText('Phone number')
  await userEvent.type(phoneInput, '123') // Too short
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(await canvas.findByText(/Please enter a valid phone number/)).toBeInTheDocument()
})

Default.test('should validate name fields', async ({ canvas, userEvent }) => {
  const firstNameInput = await canvas.findByLabelText('First name')
  const lastNameInput = await canvas.findByLabelText('Last name')

  await userEvent.type(firstNameInput, 'John')
  await userEvent.type(lastNameInput, 'Doe')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(canvas.queryByText(/First name is required/)).not.toBeInTheDocument()
  await expect(canvas.queryByText(/Last name is required/)).not.toBeInTheDocument()
})

// Step Navigation Tests
Default.test('should navigate between steps correctly', async ({ canvas, userEvent }) => {
  // Fill out contact details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();

  // Navigate to delivery details
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Verify we're on step 2
  await expect(await canvas.findByText('Delivery details')).toBeInTheDocument()
  await expect(canvas.getByText('Step 2 of 2')).toBeInTheDocument()

  // Navigate back to contact details
  await userEvent.click(canvas.getByRole('button', { name: 'Previous' }))

  // Verify we're back on step 1
  await expect(await canvas.findByText('Contact details')).toBeInTheDocument()
  await expect(canvas.getByText('Step 1 of 2')).toBeInTheDocument()
})

// Form Data Persistence Tests
Default.test('should persist form data when navigating between steps', async ({ canvas, userEvent }) => {
  // Fill out contact details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();

  // Navigate to delivery details
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Navigate back
  await userEvent.click(canvas.getByRole('button', { name: 'Previous' }))

  // Verify data persisted
  await expect(await canvas.findByDisplayValue('John')).toBeInTheDocument()
  await expect(await canvas.findByDisplayValue('Doe')).toBeInTheDocument()
  await expect(await canvas.findByDisplayValue('john@example.com')).toBeInTheDocument()
  await expect(await canvas.findByDisplayValue('1234567890')).toBeInTheDocument()
})

// Delivery Details Validation Tests
Default.test('should validate address field', async ({ canvas, userEvent }) => {
  // Navigate to delivery details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Test invalid address (too short)
  const addressInput = await canvas.findByLabelText('Streetname and housenumber')
  await userEvent.type(addressInput, '123') // Too short
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))
  await expect(await canvas.findByText(/Please enter a valid address/)).toBeInTheDocument()

  // Test valid address
  await userEvent.clear(addressInput)
  await userEvent.type(addressInput, '123 Main Street')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))
  await expect(canvas.queryByText(/Please enter a valid address/)).not.toBeInTheDocument()
})

Default.test('should validate city field', async ({ canvas, userEvent }) => {
  // Navigate to delivery details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Test invalid city (too short)
  const cityInput = await canvas.findByLabelText('City')
  await userEvent.type(cityInput, 'A') // Too short
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))
  await expect(await canvas.findByText(/Please enter a valid city/)).toBeInTheDocument()

  // Test valid city
  await userEvent.clear(cityInput)
  await userEvent.type(cityInput, 'Amsterdam')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))
  await expect(canvas.queryByText(/Please enter a valid city/)).not.toBeInTheDocument()
})

Default.test('should validate postcode field', async ({ canvas, userEvent }) => {
  // Navigate to delivery details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Test invalid postcode
  const postcodeInput = await canvas.findByLabelText('Postcode')
  await userEvent.type(postcodeInput, '123') // Invalid format
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))
  await expect(await canvas.findByText(/Please enter a valid postcode/)).toBeInTheDocument()

  // Test valid postcode
  await userEvent.clear(postcodeInput)
  await userEvent.type(postcodeInput, '1234AB') // Valid format
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))
  await expect(canvas.queryByText(/Please enter a valid postcode/)).not.toBeInTheDocument()
})

// Name Field Edge Cases
Default.test('should validate first name minimum length', async ({ canvas, userEvent }) => {
  const firstNameInput = await canvas.findByLabelText('First name')

  // Test too short first name
  await userEvent.type(firstNameInput, 'J') // Too short
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(await canvas.findByText(/Must be at least 2 characters/)).toBeInTheDocument()

  // Test valid first name
  await userEvent.clear(firstNameInput)
  await userEvent.type(firstNameInput, 'Jo')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(canvas.queryByText(/Must be at least 2 characters/)).not.toBeInTheDocument()
})

Default.test('should validate last name minimum length', async ({ canvas, userEvent }) => {
  const lastNameInput = await canvas.findByLabelText('Last name')

  // Test too short last name
  await userEvent.type(lastNameInput, 'D') // Too short
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(await canvas.findByText(/Must be at least 2 characters/)).toBeInTheDocument()

  // Test valid last name
  await userEvent.clear(lastNameInput)
  await userEvent.type(lastNameInput, 'Do')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))
  await expect(canvas.queryByText(/Must be at least 2 characters/)).not.toBeInTheDocument()
})

// Required Field Tests
Default.test('should show required errors for empty fields', async ({ canvas, userEvent }) => {
  // Try to proceed without filling any fields
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Check for specific field required messages
  await expect(await canvas.findByText(/First name is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/Last name is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/Email is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/Phone number is required/)).toBeInTheDocument()
})

Default.test('should validate all contact fields together', async ({ canvas, userEvent }) => {
  // Fill only some fields
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await tick();

  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Should show errors for missing fields
  await expect(await canvas.findByText(/Last name is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/Email is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/Phone number is required/)).toBeInTheDocument()
})

// Real-time Validation Tests
Default.test('should show validation errors in real-time after first submission attempt', async ({ canvas, userEvent }) => {
  const emailInput = await canvas.findByLabelText('Email')

  // Try to submit with invalid email
  await userEvent.type(emailInput, 'invalid')
  await tick();
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Clear and fix the email
  await userEvent.clear(emailInput)
  await userEvent.type(emailInput, 'a')

  // Error should appear immediately since we've attempted submission before
  await expect(await canvas.findByText(/Please enter a valid email address/)).toBeInTheDocument()
})

// Complete Flow Test
Default.test('should complete entire form flow successfully', async ({ canvas, userEvent }) => {
  // Fill contact details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();

  // Navigate to delivery details
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Fill delivery details
  await userEvent.type(await canvas.findByLabelText('Streetname and housenumber'), '123 Main Street')
  await userEvent.type(await canvas.findByLabelText('Postcode'), '1234AB')
  await userEvent.type(await canvas.findByLabelText('City'), 'Amsterdam')
  await tick();

  // Complete the order
  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))

  // Verify no validation errors are shown
  await expect(canvas.queryByText(/is required/)).not.toBeInTheDocument()
  await expect(canvas.queryByText(/Please enter a valid/)).not.toBeInTheDocument()
  await expect(canvas.queryByText(/Must be at least/)).not.toBeInTheDocument()
})

// Delivery Details Required Field Tests
Default.test('should show required errors for empty delivery fields', async ({ canvas, userEvent }) => {
  // Navigate to delivery details
  await userEvent.type(await canvas.findByLabelText('First name'), 'John')
  await userEvent.type(await canvas.findByLabelText('Last name'), 'Doe')
  await userEvent.type(await canvas.findByLabelText('Email'), 'john@example.com')
  await userEvent.type(await canvas.findByLabelText('Phone number'), '1234567890')
  await tick();
  await userEvent.click(canvas.getByRole('button', { name: 'Next' }))

  // Try to complete without filling delivery fields
  await userEvent.click(canvas.getByRole('button', { name: 'Complete order' }))

  // Check for specific field required messages
  await expect(await canvas.findByText(/Address is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/City is required/)).toBeInTheDocument()
  await expect(await canvas.findByText(/Postcode is required/)).toBeInTheDocument()
})
