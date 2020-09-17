import React from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { breakpoints } from '../styles/breakpoints'

const Container = styled.div`
  margin-top: 56px;
  @media ${breakpoints.M} {
    margin-top: 0;
  }
`

// TODO: Add Error boundary

export const PageTemplate: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
)

// export const SimpleTemplate: React.FC = ({ children }) => (
//   <>
//     <Header />
//     <Container>{children}</Container>
//     <Footer />
//   </>
// )
