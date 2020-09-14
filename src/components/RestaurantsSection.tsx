// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Carousel from '@brainhubeu/react-carousel'

import { PageSection } from './PageSection'
import { RestaurantCard } from './RestaurantCard'
import { getCuratedRestaurants } from '../stub/restaurants'

export const RestaurantsSection = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [restaurants, setRestaurants] = useState<any>([
    { isLoading: true },
    { isLoading: true },
    { isLoading: true },
  ])

  useEffect(() => {
    const getData = async () => {
      const data = await getCuratedRestaurants()
      setRestaurants(data)
    }

    getData()
  }, [])

  return (
    <PageSection
      title="Nice curated list of restaurants"
      showSlideButtons={restaurants.length > 3}
      onNextClick={() => setSlideIndex(slideIndex + 1)}
      onPreviousClick={() => setSlideIndex(slideIndex - 1)}
    >
      <Carousel
        slidesPerPage={3}
        infinite
        value={slideIndex}
        onChange={setSlideIndex}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </Carousel>
    </PageSection>
  )
}
