import { useState, useEffect, memo, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../app-state'
import { api } from '../../api'
import { FoodItem } from './components/FoodItem/FoodItem'
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
import { FoodItemModal } from './components/FoodItemModal'
import { Review } from '../../components/Review'
import { AnimatedIllustration } from '../../components/AnimatedIllustration'
import { ErrorBlock } from '../../components/ErrorBlock'
import { Spinner } from '../../components/Spinner';

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

const useFetchRestaurant = (id: string) => {
  const [status, setStatus] = useState('idle');
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [retry, setRetry] = useState(false);

  const retryRequest = useCallback(() => {
    setRetry(prev => !prev);
  }, [setRetry])

  useEffect(() => {
    setStatus('loading');

    api.getRestaurantById(id)
      .then((res) => {
        setStatus('success');
        setRestaurant(res);
      })
      .catch((error) => {
        const statusCode = error?.response?.status || 500
        setStatus(statusCode.toString());
      });
  }, [id, retry]);

  return {
    status,
    restaurant,
    retryRequest
  };
}

export const RestaurantDetailPage = () => {
  let { id } = useParams<{ id: string }>()

  const history = useHistory()
  const { restaurant, status, retryRequest } = useFetchRestaurant(id)

  const [selectedItem, setSelectedItem] = useState<CartItem>()
  const closeModal = () => setSelectedItem(undefined)

  const cartItems = useAppSelector(selectCartItems)
  const dispatch = useAppDispatch()
  const addItemToCart = (item: CartItem) => dispatch(saveItemAction(item))
  const clearItemFromCart = (item: CartItem) => dispatch(clearItemAction(item))


  if (status === '500') {
    return (
      <ErrorBlock
        title="Something went wrong!"
        body="Our bad, something went wrong on our side."
        image={<AnimatedIllustration animation="NotFound" />}
        onButtonClick={retryRequest}
        buttonText="Try again"
      />
    )
  }

  if (status === '404') {
    return (
      <ErrorBlock
        title="We can't find this page"
        body="This page doesn’t exist, keep looking."
        image={<AnimatedIllustration animation="Error" />}
        onButtonClick={() => history.push('/')}
        buttonText="Home"
      />
    )
  }

  if (status === 'loading') {
    return <Spinner />
  }

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
      />
      <TopBanner photoUrl={photoUrl} onBackClick={() => history.goBack()} />
      <DetailSection>
        <div className="container">
          <Heading level={2}>{name}</Heading>
          <Body>Specialties: {specialty}</Body>
          <Review rating={rating} />
          <div>
            {categories?.map((category) => (
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
              title="To drink"
              items={menu.drinks}
              cartItems={cartItems}
              onItemClick={setSelectedItem}
            />
          )}
        </div>
      </MenuSection>
    </>
  )
}

type FoodSectionProps = {
  items: FoodMenuItem[]
  title: string
  cartItems: CartItem[]
  onItemClick: (item: CartItem) => void
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
            onClick={() => onItemClick(item as CartItem)}
          />
        )
      })}
    </StyledContainer>
  </div>
))
