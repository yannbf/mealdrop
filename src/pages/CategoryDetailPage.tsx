import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getRestaurantsByCategory } from '../stub/restaurants'
import { RestaurantCard, Restaurant } from '../components/RestaurantCard'
import { CATEGORIES } from '../constants'
import styled from 'styled-components'

const Breadcrumb = styled.div`
  a {
    font-weight: bold;
  }
`

export const CategoryDetailPage = () => {
  const { id } = useParams()
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

  return (
    <div style={{ padding: '0 5rem' }}>
      <Breadcrumb>
        <h2 style={{ display: 'inline-block' }}>
          <Link to="/categories">Categories</Link>
        </h2>{' '}
        /{' '}
        <h3 style={{ display: 'inline', fontWeight: 'lighter' }}>
          {CATEGORIES[id]}
        </h3>
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
      <div className="category-list">
        {restaurants.map((restaurant: Restaurant, index: number) => (
          <RestaurantCard
            restaurant={{ ...restaurant, isLoading: index === 2 }}
          />
        ))}
      </div>
    </div>
  )
}
