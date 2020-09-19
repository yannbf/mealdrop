import React from 'react'
import styled from 'styled-components'

import { Header, HeaderComponent } from '../components/Header'
import { Footer } from '../components/Footer'
import { breakpoints } from '../styles/breakpoints'

const Container = styled.div`
  margin-top: 56px;
  @media ${breakpoints.M} {
    margin-top: 0;
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
    <Header sticky/>
    <Container>{children}</Container>
    <Footer />
  </>
)

export const SimpleTemplate: React.FC = ({ children }) => (
  <>
    <HeaderComponent logoOnly/>
    <Container>{children}</Container>
    <Footer />
  </>
)
