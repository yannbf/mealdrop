import * as React from 'react';
import styled from 'styled-components'

import { Header, HeaderComponent } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { breakpoints } from '../styles/breakpoints'

const Container = styled.div`
  margin-top: 56px;
  min-height: calc(100vh - 200px);
  @media ${breakpoints.M} {
    margin-top: 0;
  }
`

const StickyHeaderContainer = styled.div`
  margin-top: 56px;
  min-height: calc(100vh - 200px);
  @media ${breakpoints.M} {
    margin-top: 72px;
  }
`

// TODO: Add Error boundary

export const DefaultTemplate: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
)

export const StickyHeaderTemplate: React.FC = ({ children }) => (
  <>
    <Header sticky />
    <StickyHeaderContainer>{children}</StickyHeaderContainer>
    <Footer />
  </>
)

export const SimpleTemplate: React.FC = ({ children }) => (
  <>
    <HeaderComponent logoOnly />
    <Container>{children}</Container>
    <Footer />
  </>
)
