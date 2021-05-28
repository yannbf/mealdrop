import * as React from 'react';
import styled from 'styled-components'

import { Header, HeaderComponent } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

const Container = styled.div`
  min-height: calc(100vh - 200px);
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
    <Container>{children}</Container>
    <Footer />
  </>
)

export const SimpleTemplate: React.FC = ({ children }) => (
  <>
    <HeaderComponent logoOnly />
    <Container>{children}</Container>
  </>
)
