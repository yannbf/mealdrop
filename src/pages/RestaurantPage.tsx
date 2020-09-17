import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRestaurantById } from '../stub/restaurants'
import { HeroImage } from '../components/HeroImage'
import { FoodItem } from '../components/FoodItem'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { useDispatch } from 'react-redux'
import { addItemAction } from '../app-state/cart'

const StyledContainer = styled.div`
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  display: grid;
  padding-bottom: 3rem;

  @media ${breakpoints.M} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const RestaurantPage = () => {
  let { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<any>({})

  const dispatch = useDispatch()
  const addItemToCart = (item: any) => dispatch(addItemAction(item))

  useEffect(() => {
    const getData = async () => {
      const data = await getRestaurantById(id)
      setRestaurant(data)
    }

    getData()
  }, [id])

  const { menu, name, specialty, photoUrl } = restaurant

  return (
    <>
      <HeroImage url={photoUrl} />
      {restaurant.menu && (
        <div className="container">
          <h1>{name}</h1>
          <p>Specialties: {specialty}</p>
          {menu.food && (
            <div>
              <h2>To eat</h2>
              <StyledContainer>
                {menu.food.map((item: any) => (
                  <FoodItem {...item} onClick={() => addItemToCart(item)} />
                ))}
              </StyledContainer>
            </div>
          )}
          {menu.dessert && (
            <div>
              <h2>Dessert</h2>
              <StyledContainer>
                {menu.dessert.map((item: any) => (
                  <FoodItem {...item} onClick={() => addItemToCart(item)} />
                ))}
              </StyledContainer>
            </div>
          )}
          {menu.drinks && (
            <div>
              <h2>Drinks</h2>
              <StyledContainer>
                {menu.drinks.map((item: any) => (
                  <FoodItem {...item} onClick={() => addItemToCart(item)} />
                ))}
              </StyledContainer>
            </div>
          )}
        </div>
      )}
    </>
  )
}
