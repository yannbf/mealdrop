import { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { api } from '../../api'
import { RestaurantCard } from '../../components/RestaurantCard'
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  display: grid;
  padding-bottom: 5rem;
`

export const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  const [restaurants, setRestaurants] = useState<any>([
    { isLoading: true },
    { isLoading: true },
    { isLoading: true },
  ])

  useEffect(() => {
    const getData = async () => {
      const data = await api.getRestaurantsByCategory(id)
      setRestaurants(data)
    }

    getData()
  }, [id])

  const category = categories.find((cat) => cat.id === id)

  return (
    <>
      <TopBanner
        title={category?.title || 'Oops!'}
        photoUrl={category?.photoUrl}
        onBackClick={() => history.goBack()}
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
        {restaurants.length <= 0 && (
          <ErrorBlock
            body="It seems that there are no restaurants in this category yet. Try to come back later?"
            title="This is not the food you’re looking for."
            image={<img alt="no restaurants found" src={sushi} />}
            buttonText="See all restaurants"
            onButtonClick={() => {
              history.push('/categories')
            }}
          />
        )}
        <StyledContainer>
          {restaurants.map((restaurant: Restaurant, index: number) => (
            <RestaurantCard
              key={restaurant.name || index}
              {...restaurant}
              onClick={() => history.push(`/restaurants/${restaurant.id}`)}
            />
          ))}
        </StyledContainer>
      </div>
    </>
  )
}
