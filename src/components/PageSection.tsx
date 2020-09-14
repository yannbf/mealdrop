import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

export type PageSectionProps = {
  title: string
  showSlideButtons?: boolean
  onPreviousClick?: () => void
  onNextClick?: () => void
  children: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const BottomContainer = styled.div`
  display: flex;
  overflow-x: auto;
`

export const PageSection: React.FC<PageSectionProps> = ({
  title,
  onPreviousClick,
  onNextClick,
  showSlideButtons,
  children,
}) => (
  <Container>
    <TopContainer>
      <h2 className="padded">{title}</h2>
      {showSlideButtons && (
        <div>
          <Button onClick={onPreviousClick} label="⇦" />
          <Button onClick={onNextClick} label="⇨" />
        </div>
      )}
    </TopContainer>
    <BottomContainer>{children}</BottomContainer>
  </Container>
)
