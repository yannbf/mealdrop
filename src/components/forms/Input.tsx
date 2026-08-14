import type { ComponentProps } from 'react'
import { Input as DsInput } from '@droppy/design-system'
import styled from 'styled-components'

// Droppy's Input reads its input-face font from the theme (Hind). Mealdrop's
// own input text has always rendered in Montserrat, inherited from the body
// font — a Mealdrop typographic choice, not a Base UI behavior, so it stays
// overridden here.
const Wrapper = styled.div`
  && input {
    font-family: 'Montserrat', sans-serif;
  }
`

export type { InputProps } from '@droppy/design-system'

export const Input = (props: ComponentProps<typeof DsInput>) => (
  <Wrapper>
    <DsInput {...props} />
  </Wrapper>
)
