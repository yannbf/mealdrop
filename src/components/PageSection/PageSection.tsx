import * as React from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { Heading } from '../typography'

type PageSectionProps = {
  title: string
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
  padding-left: 1rem;
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const PageSection: React.FC<React.PropsWithChildren<PageSectionProps>> = ({
  title,
  topButtonLabel,
  onTopButtonClick,
  children,
}) => (
  <Container className="container-desktop">
    <TopContainer>
      <Heading level={2}>{title}</Heading>
      {topButtonLabel && (
        <Button clear onClick={onTopButtonClick}>
          {topButtonLabel}
        </Button>
      )}
    </TopContainer>
    {children}
  </Container>
)
