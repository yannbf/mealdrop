import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BreadcrumbContainer = styled.div(
  ({ theme: { color } }) => `
  margin-top: 2rem;
  margin-bottom: 2rem;
  a,
  p {
    color: ${color.secondaryText};
    text-transform: lowercase;
  }
`
)

const LinkText = styled.p`
  display: inline-block;
  text-decoration: underline;
`

const PlainText = styled.p`
  display: inline;
  font-weight: lighter;
`

const Separator = styled.span`
  margin: 0 0.5rem;
`

interface BreadcrumbProps {
  items: {
    label: string
    path?: string
  }[]
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator>/</Separator>}
          {item.path ? (
            <LinkText>
              <Link to={item.path}>{item.label}</Link>
            </LinkText>
          ) : (
            <PlainText>{item.label}</PlainText>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  )
}
