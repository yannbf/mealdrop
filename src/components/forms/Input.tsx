import type { ComponentProps } from 'react'
import { Input as DsInput } from '@droppy/design-system'

export type { InputProps } from '@droppy/design-system'

export const Input = (props: ComponentProps<typeof DsInput>) => (
  <div>
    <DsInput {...props} />
  </div>
)
