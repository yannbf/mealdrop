import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Category } from './Category'
import { CATEGORIES } from '../constants'

type Category = {
  title: string
  photoUrl: string
}

export type CategoryListProps = {
  categories: Category[]
}

const StyledContainer = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  display: grid;
  padding-bottom: 5rem;
`

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <StyledContainer>
      {categories.map((category) => (
        <Link to={`/categories/${category.title}`}>
          <Category {...category} title={CATEGORIES[category.title]} />
        </Link>
      ))}
    </StyledContainer>
  )
}
