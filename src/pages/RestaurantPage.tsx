import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../stub/restaurants'
import { HeroImage } from '../components/HeroImage'

export const RestaurantPage = () => {
  let { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<any>()

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurantById(id)
      setRestaurant(data)
    }

    getData()
  }, [id])

  return (
    <>
      <h2>Restaurant detail page</h2>
      <HeroImage url={restaurant?.photoUrl} />
      {restaurant && (
        <div style={{ padding: '0 5rem' }}>
          <h1>{restaurant.name}</h1>
          <p>Specialties: {restaurant.specialty}</p>
          <div style={{ padding: '2rem 0' }}>
            <h2>Dishes</h2>
            {restaurant.foodItems.map(({ name, description, price }: any) => (
              <div>
                <div>
                  {name} - {price}
                </div>
                <div>{description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
