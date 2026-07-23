import * as React from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { Heading } from '../typography'

type PageSectionProps = {
  title: string
  topButtonLabel?: string
  onTopButtonClick?: () => void
  children: React.ReactNode
}

// theme.Button carries the base chrome via @droppy/theme/styles.css; the
// "clear" look (transparent fill, no hover fill outside the subtle-hover
// bg) and the responsive padding bump are this call site's own CSS —
// duplicated per site by design (milestone 1 has no shared Button wrapper).
const ClearButton = styled(BaseButton)`
  z-index: 1;
  color: var(--ds-color-text-primary);
  background-color: transparent;

  &:hover:not([data-disabled]) {
    background-color: var(--ds-color-action-subtle-hover);
  }

  &[data-disabled] {
    background-color: transparent;
  }

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

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
        <ClearButton className={theme.Button} onClick={onTopButtonClick}>
          {topButtonLabel}
        </ClearButton>
      )}
    </TopContainer>
    {children}
  </Container>
)
