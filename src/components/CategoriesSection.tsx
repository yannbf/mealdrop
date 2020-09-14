import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '@brainhubeu/react-carousel'

import { PageSection } from './PageSection'
import { Category, CategoryProps } from './Category'

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
        slidesPerPage={3}
        infinite
        value={slideIndex}
        onChange={setSlideIndex}
      >
        {categories.map((item) => (
          <Link to={`/categories/${item.title.toLowerCase()}`}>
            <Category rounded {...item} />
          </Link>
        ))}
      </Carousel>
    </PageSection>
  )
}
