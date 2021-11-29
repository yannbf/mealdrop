import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import { api } from '../../../../api'
import { IconButton } from '../../../../components/IconButton'
import { PageSection } from '../../../../components/PageSection'
import { RestaurantCard, RestaurantCardSkeleton } from '../../../../components/RestaurantCard'
import { Restaurant } from '../../../../types'

const PreviousButton = styled(IconButton)`
  position: absolute;
  left: 0;
`

const NextButton = styled(IconButton)`
  position: absolute;
  right: 0;
`

type RestaurantsSectionProps = {
  title: string
}

export const RestaurantsSection = ({ title }: RestaurantsSectionProps) => {
  const navigate = useNavigate()

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        // TODO: make this a hook
        const data = await api.getRestaurants()
        setRestaurants(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
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
        {isLoading
          ? Array.from(Array(3)).map((index) => <RestaurantCardSkeleton key={index} />)
          : restaurants.map((restaurant: Restaurant, index: number) => (
              <RestaurantCard
                key={restaurant.name + index}
                {...restaurant}
                onClick={() => navigate(`/restaurants/${restaurant.id}`)}
              />
            ))}
      </Carousel>
    </PageSection>
  )
}
