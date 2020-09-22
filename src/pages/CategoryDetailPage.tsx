import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getRestaurantsByCategory } from '../stub/restaurants'
import { RestaurantCard, Restaurant } from '../components/RestaurantCard'
import { CATEGORIES } from '../constants'
import styled from 'styled-components'
import { TopBanner } from '../components/TopBanner'
import { categories } from '../stub/categories'

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
  const { id } = useParams()
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

  const photoUrl = categories.find((cat) => cat.title === id)?.photoUrl

  return (
    <>
      <TopBanner
        title={CATEGORIES[id]}
        photoUrl={photoUrl}
        onBackClick={() => history.goBack()}
      />
      <div className="container">
        <Breadcrumb>
          <p style={{ display: 'inline-block', textDecoration: 'underline' }}>
            <Link to="/categories">categories</Link>
          </p>{' '}
          /{' '}
          <p style={{ display: 'inline', fontWeight: 'lighter' }}>
            {CATEGORIES[id]}
          </p>
        </Breadcrumb>
        {restaurants.length <= 0 && (
          <div style={{ textAlign: 'center', padding: '6rem' }}>
            <h3>
              Oops, there seems to be no restaurant from this category at this
              moment.
            </h3>
            <img
              alt="empty restaurants"
              height="150px"
              src="https://www.flaticon.com/svg/static/icons/svg/2187/2187405.svg"
            />
            <p>Please check back later!</p>
          </div>
        )}
        <StyledContainer>
          {restaurants.map((restaurant: Restaurant, index: number) => (
            <RestaurantCard restaurant={{ ...restaurant }} />
          ))}
        </StyledContainer>
      </div>
    </>
  )
}
