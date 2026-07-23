import * as React from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { Body, Heading } from '../typography'

// theme.Button carries the base chrome (fill, radius, focus ring, body face,
// hover, disabled) via @droppy/theme/styles.css; only the app's responsive
// padding bump remains here, duplicated per call site by design (milestone 1
// has no shared Button wrapper).
const StyledButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

const ErrorContainer = styled.div(
  ({ theme: { spacing } }) => css`
    margin: 0 auto;
    padding: ${spacing.l} 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  `
)

const ImageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    text-align: center;
    margin-top: ${spacing.m};
    display: flex;
    justify-content: center;
    width: 100%;
  `
)

type ErrorBlockProps = {
  title: string
  image: React.ReactNode
  body: string
  buttonText: string
  onButtonClick: () => void
}

export const ErrorBlock = ({ title, image, body, buttonText, onButtonClick }: ErrorBlockProps) => (
  <ErrorContainer>
    <Heading level={2}>{title}</Heading>
    <ImageContainer>{image}</ImageContainer>
    <Body>{body}</Body>
    <StyledButton className={theme.Button} onClick={onButtonClick}>
      {buttonText}
    </StyledButton>
  </ErrorContainer>
)
