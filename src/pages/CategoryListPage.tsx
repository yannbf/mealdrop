import React from 'react'
import { categories } from '../stub/categories'
import { Category } from '../components/Category'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  display: grid;
  padding-bottom: 5rem;
`

export const CategoryListPage = () => {
  return (
    <div className="container">
      <h2>Categories</h2>
      <p style={{ marginBottom: '4rem' }}>
        Feeling like having pizza? How about Sushi? Satisfy your cravings with a
        few quick clicks and enjoy the world of delivery! Check a great
        selection of restaurants by selecting a category below.
      </p>
      <StyledContainer>
        {categories.map((category) => (
          <Link to={`/categories/${category.title}`}>
            <Category {...category} />
          </Link>
        ))}
      </StyledContainer>
    </div>
  )
}
