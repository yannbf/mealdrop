import React, { useState, useEffect, memo, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { api } from '../../api'
import { FoodItem } from '../../components/FoodItem/FoodItem'
import { breakpoints } from '../../styles/breakpoints'
import {
  CartItem,
  clearItemAction,
  saveItemAction,
  selectCartItems,
} from '../../app-state/cart'
import { TopBanner } from '../../components/TopBanner'
import { Heading, Body } from '../../components/typography'
import { Badge } from '../../components/Badge'
import { FoodMenuItem, Restaurant } from '../../types'
import { FoodItemModal } from '../../components/modal/FoodItemModal'
import { Review } from '../../components/Review'
import { AnimatedIllustration } from '../../components/AnimatedIllustration'
import { ErrorSection } from '../../components/ErrorSection'

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
  const [error, setError] = useState()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  const [selectedItem, setSelectedItem] = useState<CartItem>()
  const closeModal = () => setSelectedItem(undefined)

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const addItemToCart = (item: any) => dispatch(saveItemAction(item))
  const clearItemFromCart = (item: any) => dispatch(clearItemAction(item))

  const fetchData = useCallback(() => {
    const getData = async () => {
      const data = await api.getRestaurantById(id)
      setRestaurant(data)
    }

    getData()
      .then(() => setError(undefined))
      .catch((error) => {
        const statusCode = error?.response?.status || 500
        setError(statusCode)
      })
  }, [id])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (error === 500) {
    return (
      <ErrorSection
        title="Something went wrong!"
        body="Our bad, something went wrong on our side."
        image={<AnimatedIllustration animation="NotFound" />}
        onButtonClick={fetchData}
        buttonText="Try again"
      />
    )
  }

  if (error === 404) {
    return (
      <ErrorSection
        title="We can't find this page"
        body="This page doesn’t exist, keep looking."
        image={<AnimatedIllustration animation="Error" />}
        onButtonClick={() => history.push('/')}
        buttonText="Home"
      />
    )
  }

  if (restaurant === undefined) {
    return <Heading>Loading..</Heading>
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
      />
      <TopBanner photoUrl={photoUrl} onBackClick={() => history.goBack()} />
      {menu && (
        <>
          <DetailSection>
            <div className="container">
              <Heading level={2}>{name}</Heading>
              <Body>Specialties: {specialty}</Body>
              <Review rating={rating} />
              <div>
                {categories?.map((category: any) => (
                  <StyledBadge key={category} text={category} />
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

type FoodSectionProps = { 
  items: FoodMenuItem[] 
  title: string 
  cartItems: CartItem[]
  onItemClick: (item: any) => void 
}

const FoodSection = memo(({ title, cartItems, items, onItemClick }: FoodSectionProps) => (
  <div>
    <StyledHeading level={3}>{title}</StyledHeading>
    <StyledContainer>
      {items.map((item: FoodMenuItem) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem.id === item.id
        )
        const quantity = cartItem?.quantity || 0
        return (
          <FoodItem
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
            quantity={quantity}
            onClick={() => onItemClick(item)}
          />
        )
      })}
    </StyledContainer>
  </div>
))
