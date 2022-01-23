import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import { useFetchRestaurants } from '../../../../api/hooks'
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

type RestaurantsSectionComponentProps = {
  title: string
  restaurants: Restaurant[]
  isLoading?: boolean
  onRestaurantClick: (id: string) => void
}

// Presentational component, receives input and outputs events
export const RestaurantsSectionComponent = ({
  title,
  restaurants,
  onRestaurantClick,
  isLoading,
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
            breakpoint: { max: 5000, min: 1024 },
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
          ? Array.from(Array(3)).map((_, index) => <RestaurantCardSkeleton key={index} />)
          : restaurants.map((restaurant: Restaurant) => (
              <RestaurantCard
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
  const navigate = useNavigate()

  const { restaurants, status } = useFetchRestaurants()

  return (
    <RestaurantsSectionComponent
      title={title}
      restaurants={restaurants}
      isLoading={status === 'loading'}
      onRestaurantClick={(id: string) => navigate(`/restaurants/${id}`)}
    />
  )
}
