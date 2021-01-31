import React, { useState, useEffect, memo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getRestaurantById } from '../stub/restaurants'
import { FoodItem } from '../components/FoodItem'
import styled, { css } from 'styled-components'
import { breakpoints } from '../styles/breakpoints'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearItemAction,
  saveItemAction,
  selectCartItems,
} from '../app-state/cart'

import { TopBanner } from '../components/TopBanner'
import { Heading } from '../components/typography/Heading'
import { Body } from '../components/typography/Body'
import { Badge } from '../components/Badge'
import { Restaurant } from '../components/RestaurantCard'
import { FoodItemModal } from '../components/modal/FoodItemModal'
import { Review } from '../components/Review'

const StyledContainer = styled.div`
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  display: grid;
  padding-bottom: 3rem;

  @media ${breakpoints.M} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.L} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const DetailSection = styled.div(
  ({ theme: { color, spacing } }) => css`
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
    background: ${color.restaurantDetailBackground};
    .review-text {
      color: ${color.reviewText};
      margin-bottom: ${spacing.m};
    }
  `
)

const MenuSection = styled.div(
  ({ theme: { color } }) => css`
    padding-top: 3rem !important;
    padding-bottom: 5rem !important;
    background: ${color.menuSectionBackground};
  `
)

const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`

const StyledBadge = styled(Badge)(
  ({ theme: { spacing } }) => css`
    margin-right: ${spacing.s};
  `
)

export const RestaurantDetailPage = () => {
  let { id } = useParams<{ id: string }>()
  const history = useHistory()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  const [selectedItem, setSelectedItem] = useState()
  const closeModal = () => setSelectedItem(undefined)

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const addItemToCart = (item: any) => dispatch(saveItemAction(item))
  const clearItemFromCart = (item: any) => dispatch(clearItemAction(item))

  useEffect(() => {
    const getData = async () => {
      const data = (await getRestaurantById(id)) as Restaurant
      setRestaurant(data)
    }

    getData()
  }, [id])

  if (!restaurant) {
    return null
  }

  const { menu, name, rating, specialty, photoUrl, categories } = restaurant

  return (
    <>
      <FoodItemModal
        item={selectedItem}
        cartItems={cartItems}
        onClose={closeModal}
        onItemSave={addItemToCart}
        onItemRemove={clearItemFromCart}
        isOpen={!!selectedItem}
      />
      <TopBanner photoUrl={photoUrl} onBackClick={() => history.goBack()} />
      {restaurant.menu && (
        <>
          <DetailSection>
            <div className="container">
              <Heading level={2}>{name}</Heading>
              <Body>Specialties: {specialty}</Body>
              <Review rating={rating} />
              <div>
                {categories?.map((category: any) => (
                  <StyledBadge text={category} />
                ))}
              </div>
            </div>
          </DetailSection>
          <MenuSection>
            <div className="container">
              {menu.food && (
                <FoodSection
                  title="To eat"
                  items={menu.food}
                  cartItems={cartItems}
                  onItemClick={setSelectedItem}
                />
              )}
              {menu.dessert && (
                <FoodSection
                  title="Dessert"
                  items={menu.dessert}
                  cartItems={cartItems}
                  onItemClick={setSelectedItem}
                />
              )}
              {menu.drinks && (
                <FoodSection
                  title="To eat"
                  items={menu.drinks}
                  cartItems={cartItems}
                  onItemClick={setSelectedItem}
                />
              )}
            </div>
          </MenuSection>
        </>
      )}
    </>
  )
}

const FoodSection = memo(({ title, cartItems, items, onItemClick }: any) => (
  <div>
    <StyledHeading level={3}>{title}</StyledHeading>
    <StyledContainer>
      {items.map((item: any) => {
        const cartItem = cartItems.find(
          (cartItem: any) => cartItem.id === item.id
        )
        const quantity = cartItem?.quantity || 0
        return (
          <FoodItem
            key={item.title}
            {...item}
            quantity={quantity}
            onClick={() => onItemClick(item)}
          />
        )
      })}
    </StyledContainer>
  </div>
))
