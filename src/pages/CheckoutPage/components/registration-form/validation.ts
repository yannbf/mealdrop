import { z } from 'zod'

export const contactDetailsSchema = z.object({
  firstName: z.string().min(1, 'Required').min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Required').min(2, 'Last name must be at least 2 characters'),
  email: z.string().min(1, 'Required').email('Please enter a valid email address'),
  phone: z.string().min(1, 'Required').min(10, 'Please enter a valid phone number'),
})

export const deliveryDetailsSchema = z.object({
  address: z.string().min(1, 'Required').min(5, 'Please enter a valid address'),
  city: z.string().min(1, 'Required').min(2, 'Please enter a valid city'),
  postcode: z
    .string()
    .min(1, 'Required')
    .regex(/^[0-9]{4}[A-Z]{2}$/, 'Please enter a valid postcode (e.g., 1234AB)'),
})

export type ContactDetailsFormData = z.infer<typeof contactDetailsSchema>
export type DeliveryDetailsFormData = z.infer<typeof deliveryDetailsSchema>
