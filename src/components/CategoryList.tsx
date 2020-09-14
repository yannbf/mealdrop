import React from 'react'
import styled from 'styled-components'
import { Category } from './Category'

export type CategoryListProps = {
  items: Array<{
    title: string
    photoUrl: string
  }>
}

const Container = styled.div`
  display: flex;
  align-items: center;
  scroll-snap-align: start;
`

export const CategoryList = ({ items }: CategoryListProps) => {
  return (
    <Container>
      {items.map((item) => (
        <Category {...item} />
      ))}
    </Container>
  )
}
