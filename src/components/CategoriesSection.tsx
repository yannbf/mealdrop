import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '@brainhubeu/react-carousel'

import { PageSection } from './PageSection'
import { Category, CategoryProps } from './Category'
import { viewports } from '../styles/breakpoints'

export type CategoriesSectionProps = {
  categories: CategoryProps[]
}

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <PageSection
      title="Categories"
      showSlideButtons={categories.length > 3}
      onNextClick={() => setSlideIndex(slideIndex + 1)}
      onPreviousClick={() => setSlideIndex(slideIndex - 1)}
    >
      <Carousel
        infinite
        value={slideIndex}
        onChange={setSlideIndex}
        slidesPerPage={5}
        breakpoints={{
          [viewports.small]: {
            slidesPerPage: 3,
          },
          [viewports.medium]: {
            slidesPerPage: 4,
          },
        }}
      >
        {categories.map((item) => (
          <Link key={item.title} to={`/categories/${item.title.toLowerCase()}`}>
            <Category rounded {...item} />
          </Link>
        ))}
      </Carousel>
    </PageSection>
  )
}
