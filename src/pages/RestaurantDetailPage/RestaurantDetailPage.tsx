import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { PageTemplate } from '../../templates/PageTemplate'
import { useFetchRestaurant } from '../../api/hooks'
import { useAppDispatch, useAppSelector } from '../../app-state'
import { CartItem, clearItemAction, saveItemAction, selectCartItems } from '../../app-state/cart'
import { TopBanner } from '../../components/TopBanner'
import { Heading, Body } from '../../components/typography'
import { Badge } from '../../components/Badge'
import { Review } from '../../components/Review'
import { AnimatedIllustration } from '../../components/AnimatedIllustration'
import { ErrorBlock } from '../../components/ErrorBlock'
import { Spinner } from '../../components/Spinner'

import { FoodItemModal } from './components/FoodItemModal'
import { FoodSection } from './components/FoodSection'

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

const StyledBadge = styled(Badge)(
  ({ theme: { spacing } }) => css`
    margin-right: ${spacing.s};
  `
)

export const RestaurantDetailPage = () => {
  const { id = '' } = useParams<'id'>()

  const navigate = useNavigate()
  const { restaurant, status, retryRequest } = useFetchRestaurant(id)

  const [selectedItem, setSelectedItem] = useState<CartItem>()
  const closeModal = () => setSelectedItem(undefined)

  const cartItems = useAppSelector(selectCartItems)
  const dispatch = useAppDispatch()
  const addItemToCart = (item: CartItem) => dispatch(saveItemAction(item))
  const clearItemFromCart = (item: CartItem) => dispatch(clearItemAction(item))

  if (status === '500') {
    return (
      <PageTemplate type="sticky-header">
        <ErrorBlock
          title="Something went wrong!"
          body="Our bad, something went wrong on our side."
          image={<AnimatedIllustration animation="NotFound" />}
          onButtonClick={retryRequest}
          buttonText="Try again"
        />
      </PageTemplate>
    )
  }

  if (status === '404') {
    return (
      <PageTemplate type="sticky-header">
        <ErrorBlock
          title="We can't find this page"
          body="This page doesn’t exist, keep looking."
          image={<AnimatedIllustration animation="Error" />}
          onButtonClick={() => navigate('/')}
          buttonText="Home"
        />
      </PageTemplate>
    )
  }

  if (status === 'loading') {
    return (
      <PageTemplate type="sticky-header">
        <Spinner />
      </PageTemplate>
    )
  }

  if (!restaurant) {
    return null
  }

  const { menu, name, rating, specialty, photoUrl, categories } = restaurant

  return (
    <PageTemplate type="sticky-header">
      <FoodItemModal
        item={selectedItem}
        cartItems={cartItems}
        onClose={closeModal}
        onItemSave={addItemToCart}
        onItemRemove={clearItemFromCart}
      />
      <TopBanner photoUrl={photoUrl} onBackClick={() => navigate(-1)} />
      <DetailSection>
        <div className="container">
          <Heading level={2}>{name}</Heading>
          <Body>Specialties: {specialty}</Body>
          <Review rating={rating} />
          <div>{categories?.map((category) => <StyledBadge key={category} text={category} />)}</div>
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
              title="To drink"
              items={menu.drinks}
              cartItems={cartItems}
              onItemClick={setSelectedItem}
            />
          )}
        </div>
      </MenuSection>
    </PageTemplate>
  )
}
