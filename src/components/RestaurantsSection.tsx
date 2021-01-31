import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from 'react-multi-carousel'

import { getCuratedRestaurants } from '../stub/restaurants'
import { breakpoints } from '../styles/breakpoints'
import { IconButton } from './IconButton'
import { PageSection } from './PageSection'
import { RestaurantCard } from './RestaurantCard'

const PreviousButton = styled(IconButton)`
  position: absolute;
  left: 0;
`

const NextButton = styled(IconButton)`
  position: absolute;
  right: 0;
`

const StyledRestaurantCard = styled(RestaurantCard)`
  @media ${breakpoints.S} {
    margin-right: 1rem;
  }
`

export const RestaurantsSection = ({ title }: { title: string }) => {
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

  const isMobile = /Mobi/i.test(window.navigator.userAgent)
  return (
    <PageSection title={title}>
      <Carousel
        draggable={isMobile}
        partialVisible={isMobile}
        customLeftArrow={<PreviousButton name="arrow-left" />}
        customRightArrow={<NextButton name="arrow-right" />}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30,
          },
        }}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item"
      >
        {restaurants.map((restaurant: any, index: number) => (
          <StyledRestaurantCard
            key={restaurant.name + index}
            {...restaurant}
          />
        ))}
      </Carousel>
    </PageSection>
  )
}
