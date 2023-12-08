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

export const RestaurantsSection = ({ title }: RestaurantsSectionProps) => {
  const navigate = useNavigate()

  const { restaurants, status } = useFetchRestaurants()

  const isMobile = /Mobi/i.test(window.navigator.userAgent)
  return (
    <PageSection title={title}>
      <Carousel
        draggable={isMobile}
        partialVisible={isMobile}
        customLeftArrow={
          <PreviousButton
            icon={
              <>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </>
            }
          />
        }
        customRightArrow={
          <NextButton
            icon={
              <>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </>
            }
          />
        }
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
        {status === 'loading'
          ? Array.from(Array(3)).map((_, index) => <RestaurantCardSkeleton key={index} />)
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
