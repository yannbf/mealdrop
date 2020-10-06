import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Carousel from '@brainhubeu/react-carousel'

import { PageSection } from './PageSection'
import { Category, CategoryProps } from './Category'
import { viewports } from '../styles/breakpoints'
import styled from 'styled-components'

export type CategoriesSectionProps = {
  categories: CategoryProps[]
}

const StyledLink = styled(Link)`
  width: 100%;
  margin-right: 1rem;
`

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const history = useHistory()

  return (
    <PageSection
      title="Categories"
      showSlideButtons={categories.length > 3}
      onNextClick={() => setSlideIndex(slideIndex + 1)}
      onPreviousClick={() => setSlideIndex(slideIndex - 1)}
      topButtonLabel="View all categories"
      onTopButtonClick={() => history.push('/categories')}
    >
      <Carousel
        infinite
        value={slideIndex}
        onChange={setSlideIndex}
        slidesPerPage={6}
        breakpoints={{
          [viewports.S]: {
            slidesPerPage: 2,
          },
          [viewports.M]: {
            slidesPerPage: 3,
          },
          [viewports.L]: {
            slidesPerPage: 4,
          },
        }}
      >
        {categories.map((category) => (
          <StyledLink key={category.id} to={`/categories/${category.id}`}>
            <Category rounded {...category} />
          </StyledLink>
        ))}
      </Carousel>
    </PageSection>
  )
}
