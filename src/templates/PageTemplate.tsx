import * as React from 'react'
import styled from 'styled-components'

import { Header, HeaderComponent } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

const Container = styled.div`
  min-height: calc(100vh - 200px);
`

type PageTemplateProps = {
  type?: 'default' | 'sticky-header' | 'basic'
}

export const PageTemplate: React.FC<React.PropsWithChildren<PageTemplateProps>> = ({
  type = 'default',
  children,
}) => {
  switch (type) {
    case 'sticky-header':
      return (
        <>
          <Header sticky />
          <Container>{children}</Container>
          <Footer />
        </>
      )
    case 'basic':
      return (
        <>
          <HeaderComponent logoOnly />
          <Container>{children}</Container>
        </>
      )
  }

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
