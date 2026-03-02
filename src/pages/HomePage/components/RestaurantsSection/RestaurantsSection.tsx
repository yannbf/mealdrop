import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Carousel, { type ArrowProps, type CarouselProps } from 'react-multi-carousel'

import { useFetchRestaurants } from '../../../../api/hooks'
import { IconButton } from '../../../../components/IconButton'
import { PageSection } from '../../../../components/PageSection'
import { RestaurantCard, RestaurantCardSkeleton } from '../../../../components/RestaurantCard'
import { Restaurant } from '../../../../types'
import { isMobile } from '../../../../helpers'

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

const CustomArrow = (props: Partial<CarouselProps & ArrowProps> & { isNext?: boolean }) => {
  // filter out unnecessary props coming from react-multi-carousel
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { carouselState, rtl, isNext, ...rest } = props
  return isNext ? (
    <NextButton name="arrow-right" {...rest} />
  ) : (
    <PreviousButton name="arrow-left" {...rest} />
  )
}

export const RestaurantsSection = ({ title }: RestaurantsSectionProps) => {
  const navigate = useNavigate()

  const { restaurants, status } = useFetchRestaurants()

  const isOnMobile = isMobile()
  return (
    <PageSection title={title}>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: '400px',
          overflowX: 'auto',
          gap: '16px',
          height: '440px',
        }}
        className="carousel-container"
      >
        {status === 'loading'
          ? Array.from({ length: 3 }).map((_, index) => <RestaurantCardSkeleton key={index} />)
          : restaurants.map((restaurant: Restaurant, index: number) => (
            <RestaurantCard
              key={restaurant.name + index}
              {...restaurant}
              onClick={() => navigate(`/restaurants/${restaurant.id}`)}
            />
          ))}
      </div>
    </PageSection>
  )
}
