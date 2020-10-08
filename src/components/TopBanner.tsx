import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { IconButton } from './IconButton'
import { Heading } from './typography/Heading'

const StyledHeading = styled(Heading)<{ inverted: boolean }>(
  ({ inverted }) => css`
    color: ${inverted ? 'white' : '#2c2c2c'};
  `
)

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  @media ${breakpoints.M} {
    left: 3.5rem;
  }
`

const Container = styled.div<{ src: string }>(
  ({ src }) => css`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: ${src ? `url(${src}) no-repeat 50%` : '#E5F8BC'};
    background-position: center;
    background-size: cover;
    height: 240px;
  `
)

export const TopBanner = ({ photoUrl, title, onBackClick }: any) => {
  return (
    <Container src={photoUrl}>
      {/* <StyledIconButton onClick={onBackClick} small name="arrow-backward" /> */}
      <StyledHeading inverted={!!photoUrl}>{title}</StyledHeading>
    </Container>
  )
}
