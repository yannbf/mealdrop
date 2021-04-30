import React from 'react'
import styled, { css } from 'styled-components'

import { Button } from '../Button';
import { Body, Heading } from '../typography';

const ErrorContainer = styled.div(
  ({ theme: { spacing } }) => css`
  max-width: 450px;
  margin: 0 auto;
  padding-top: ${spacing.m};
  display: flex;
  align-items: center;
  flex-direction: column;
  `
);

const ImageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    text-align: center;
    margin-top: ${spacing.m};
    max-height: 450px;
    width: 100%;
  `
)

export type ErrorSectionProps = {
  title: string
  image: React.ReactNode
  body: string
  buttonText: string
  onButtonClick: () => void
}

export const ErrorSection = ({ title, image, body, buttonText, onButtonClick }: ErrorSectionProps) => {
  return <ErrorContainer>
    <Heading level={2}>{title}</Heading>
    <ImageContainer>
      {image}
    </ImageContainer>
    <Body>{body}</Body>
    <Button onClick={onButtonClick}>{buttonText}</Button>
  </ErrorContainer>
}
