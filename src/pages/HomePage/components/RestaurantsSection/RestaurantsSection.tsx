import { useNavigate } from 'react-router-dom'

import { useFetchRestaurants } from '../../../../api/hooks'
import { PageSection } from '../../../../components/PageSection'
import { RestaurantCard, RestaurantCardSkeleton } from '../../../../components/RestaurantCard'
import { Carousel } from '../../../../components/Carousel'
import { Restaurant } from '../../../../types'

type RestaurantsSectionProps = {
  title: string
}

export const RestaurantsSection = ({ title }: RestaurantsSectionProps) => {
  const navigate = useNavigate()

  const { restaurants, status } = useFetchRestaurants()

  return (
    <PageSection title={title}>
      <Carousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }} slidesToScroll={{ desktop: 3 }}>
        {status === 'loading'
          ? Array.from({ length: 3 }).map((_, index) => <RestaurantCardSkeleton key={index} />)
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
