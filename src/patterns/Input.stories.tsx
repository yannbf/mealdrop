// Ported from the (now-dissolved) src/components/forms/Input.stories.tsx.
// Milestone 1 has no shared Field/Input wrapper: this demonstrates the raw
// call-site pattern — import @base-ui/react/field and @base-ui/react/input
// directly, bind theme.FieldRoot/FieldLabel/Input/FieldError. Real call
// sites duplicate this per field (see the CheckoutPage registration forms,
// 7 fields across 2 files); this story exists purely to preview the pattern
// in isolation and keep the original Figma-linked coverage.
import type { ChangeEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field } from '@base-ui/react/field'
import { Input as BaseInput } from '@base-ui/react/input'
import theme from '@droppy/theme'
import { fn } from 'storybook/test'

type PatternArgs = {
  label?: string
  placeholder?: string
  value?: string
  error?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputPattern = ({ label, placeholder, value, error, onChange }: PatternArgs) => (
  <Field.Root className={theme.FieldRoot}>
    {label && <Field.Label className={theme.FieldLabel}>{label}</Field.Label>}
    <BaseInput
      className={theme.Input}
      aria-label={label || 'input'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
    <Field.Error className={theme.FieldError} match>
      {error || ' '}
    </Field.Error>
  </Field.Root>
)

const meta = {
  title: 'Patterns/Form/Input',
  component: InputPattern,
  args: {
    onChange: fn(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3572&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} satisfies Meta<typeof InputPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '',
  },
}

export const WithLabel: Story = {
  args: {
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
    label: 'Input field',
    value: 'jane@doecom',
    error: 'email should be valid',
  },
}
