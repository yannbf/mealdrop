import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { getRestaurantsByCategory } from '../stub/restaurants'
import { RestaurantCard, Restaurant } from '../components/RestaurantCard'
import { TopBanner } from '../components/TopBanner'
import { categories } from '../stub/categories'
import { Heading } from '../components/typography/Heading'
import { Body } from '../components/typography/Body'
import { Button } from '../components/Button'
import sushi from '../assets/images/sushi.svg'

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
      const data = await getRestaurantsByCategory(id)
      setRestaurants(data)
    }

    getData()
  }, [id])

  const category = categories.find((cat) => cat.id === id)

  return (
    <>
      <TopBanner
        title={category?.title}
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
          <div style={{ textAlign: 'center', padding: '6rem' }}>
            <img alt="no restaurants found" src={sushi} />
            <Heading level={2}>
              This is not the food you’re looking for.
            </Heading>
            <Body>
              There seems that there are no restaurants in this category yet.
              Try to come back later?
            </Body>
            <Link to="/categories">
              <Button>See all restaurants</Button>
            </Link>
          </div>
        )}
        <StyledContainer>
          {restaurants.map((restaurant: Restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </StyledContainer>
      </div>
    </>
  )
}
