import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { api } from '../../api'
import { RestaurantCard, RestaurantCardSkeleton } from '../../components/RestaurantCard'
import { TopBanner } from '../../components/TopBanner'
import { categories } from '../../stub/categories'
import sushi from '../../assets/images/sushi.svg'
import { Restaurant } from '../../types'
import { ErrorBlock } from '../../components/ErrorBlock'

const Breadcrumb = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  a,
  p {
    color: #7b7b7b;
    text-transform: lowercase;
  }
`

const StyledContainer = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(356px, 1fr));
  gap: 24px;
  display: grid;
  padding-bottom: 5rem;
`

export const CategoryDetailPage = () => {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      const getData = async () => {
        const data = await api.getRestaurantsByCategory(id)
        setRestaurants(data)
        setIsLoading(false)
      }

      getData()
    }
  }, [id])

  const category = categories.find((cat) => cat.id === id)

  return (
    <>
      <TopBanner
        title={category?.title || 'Oops!'}
        photoUrl={category?.photoUrl}
        onBackClick={() => navigate(-1)}
      />
      <div className="container">
        <Breadcrumb>
          <p style={{ display: 'inline-block', textDecoration: 'underline' }}>
            <Link to="/categories">categories</Link>
          </p>{' '}
          /{' '}
          <p style={{ display: 'inline', fontWeight: 'lighter' }}>
            {category?.title.toLowerCase()}
          </p>
        </Breadcrumb>
        {!isLoading && restaurants.length <= 0 && (
          <ErrorBlock
            body="It seems that there are no restaurants in this category yet. Try to come back later?"
            title="This is not the food you’re looking for."
            image={<img alt="no restaurants found" src={sushi} />}
            buttonText="See all restaurants"
            onButtonClick={() => {
              navigate('/categories')
            }}
          />
        )}
        <StyledContainer>
          {isLoading
            ? Array.from(Array(3)).map((index) => <RestaurantCardSkeleton key={index} />)
            : restaurants.map((restaurant: Restaurant, index: number) => (
                <RestaurantCard
                  key={restaurant.name || index}
                  {...restaurant}
                  onClick={() => navigate(`/restaurants/${restaurant.id}`)}
                />
              ))}
        </StyledContainer>
      </div>
    </>
  )
}
