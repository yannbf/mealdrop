import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import { api } from '../../../../api'
import { breakpoints } from '../../../../styles/breakpoints'
import { IconButton } from '../../../../components/IconButton'
import { PageSection } from '../../../../components/PageSection'
import { RestaurantCard } from '../../../../components/RestaurantCard'
import { Restaurant } from '../../../../types'

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

type RestaurantsSectionProps = {
  title: string
}

type RestaurantsSectionComponentProps = {
  title: string
  restaurants: Restaurant[]
  onRestaurantClick: (id: string) => void
}

// Presentational component, receives input and outputs events
export const RestaurantsSectionComponent = ({
  title,
  restaurants,
  onRestaurantClick,
}: RestaurantsSectionComponentProps) => {
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
        {restaurants.map((restaurant: Restaurant) => (
          <StyledRestaurantCard
            key={restaurant.name}
            {...restaurant}
            onClick={() => onRestaurantClick(restaurant.id!)}
          />
        ))}
      </Carousel>
    </PageSection>
  )
}

// Container component, takes care of logic and passes info down to presentational component
export const RestaurantsSection = ({ title }: RestaurantsSectionProps) => {
  const history = useHistory()

  const [restaurants, setRestaurants] = useState<any>([
    { isLoading: true },
    { isLoading: true },
    { isLoading: true },
  ])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await api.getCuratedRestaurants()
        setRestaurants(data)
      } catch (err) {
        console.error(err)
      }
    }

    getData()
  }, [])

  return (
    <RestaurantsSectionComponent
      title={title}
      restaurants={restaurants}
      onRestaurantClick={(id: string) => history.push(`/restaurants/${id}`)}
    />
  )
}
