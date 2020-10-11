import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { IconButton } from './IconButton'
import { Heading } from './typography/Heading'

const PreviousButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  left: 0;
`
const NextButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  right: 0;
`

export type PageSectionProps = {
  title: string
  showSlideButtons?: boolean
  onPreviousClick?: () => void
  onNextClick?: () => void
  showNextButton?: boolean
  showPreviousButton?: boolean
  topButtonLabel?: string
  onTopButtonClick?: () => void
  children: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  position: relative;
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const BottomContainer = styled.div`
  display: flex;
  overflow-x: auto;
  position: static;
`

export const PageSection: React.FC<PageSectionProps> = ({
  title,
  onPreviousClick,
  onNextClick,
  showNextButton,
  showPreviousButton,
  topButtonLabel,
  onTopButtonClick,
  children,
}) => (
  <Container className="container">
    <TopContainer>
      <Heading level={2}>{title}</Heading>
      {topButtonLabel && (
        <Button clear onClick={onTopButtonClick}>
          {topButtonLabel}
        </Button>
      )}
    </TopContainer>
    <BottomContainer>
      {children}
      {showPreviousButton && (
        <PreviousButton small onClick={onPreviousClick} name="arrow-left" />
      )}
      {showNextButton && (
        <NextButton small onClick={onNextClick} name="arrow-right" />
      )}
    </BottomContainer>
  </Container>
)
