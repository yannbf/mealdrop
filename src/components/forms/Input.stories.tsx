// Restored at its pre-migration path/title so Chromatic keeps diffing against
// the original "Components/Form/Input" baselines (story IDs derive from title
// + export name). Milestone 1 has no shared Field/Input wrapper anymore: the
// composition below binds theme.FieldRoot/FieldLabel/Input/FieldError and
// keeps only the app's label-size override locally — the same call-site
// pattern the app uses (see the CheckoutPage registration forms).
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from '@base-ui/react/field'
import { Input as BaseInput } from '@base-ui/react/input'
import theme from '@droppy/theme'
import styled from 'styled-components'
import { fn } from 'storybook/test'

// the app's label size (the stylesheet default is 1rem).
const FieldRoot = styled(Field.Root)`
  label {
    font-size: var(--ds-type-size-md);
  }
`

type InputProps = {
  label?: string
  value?: any
  onChange?: (data: any) => void
  error?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({ label = '', type = 'text', id, error, ...otherProps }: InputProps) => (
  <FieldRoot className={theme.FieldRoot}>
    {label && <Field.Label className={theme.FieldLabel}>{label}</Field.Label>}
    <BaseInput
      id={id}
      aria-label={label}
      type={type}
      className={theme.Input}
      {...otherProps}
      autoComplete="off"
    />
    {/* `match` forces the error slot to always mount so layout never jumps
        (the stylesheet gives it a fixed min-height); children override
        Field.Error's computed message while keeping the aria-describedby
        wiring. */}
    <Field.Error className={theme.FieldError} match>
      {error || ' '}
    </Field.Error>
  </FieldRoot>
)

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    onChange: fn(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3572&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'input',
  },
}

export const WithLabel: Story = {
  args: {
    id: 'input',
    label: 'Input field',
  },
}

export const WithHint: Story = {
  args: {
    ...WithLabel.args,
    placeholder: 'This is a hint',
  },
}

export const Filled: Story = {
  args: {
    ...WithLabel.args,
    value: 'Already filled text',
  },
}

export const ErrorValidation: Story = {
  args: {
    id: 'input',
    label: 'Input field',
    value: 'jane@doecom',
    error: 'email should be valid',
  },
}
