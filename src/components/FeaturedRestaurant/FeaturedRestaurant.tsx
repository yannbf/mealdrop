import styled, { css } from 'styled-components'

import { RestaurantCard } from '../RestaurantCard'
import { Quote } from '../Quote'
import { breakpoints } from '../../styles/breakpoints'

type FeaturedRestaurantProps = {
  name: string
  rating?: number
  specialty: string
  photoUrl: string
  isClosed?: boolean
  categories?: string[]
  isLoading?: boolean
  isNew?: boolean
  onClick?: () => void
  className?: string
  quoteText: string
  quoteAuthor: string
  quoteLocation: string
}

const Container = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    gap: 1rem;

    @media ${breakpoints.M} {
      flex-direction: row;
      max-width: 1000px;
      gap: 1.5rem;
      align-items: stretch;
    }
  `
)

const CardWrapper = styled.div(
  () => css`
    flex: 1;
    min-width: 0;
    display: flex;

    @media ${breakpoints.M} {
      flex: 0 0 500px;
    }
  `
)

const StyledRestaurantCard = styled(RestaurantCard)(
  () => css`
    @media ${breakpoints.M} {
      height: 100%;

      > div {
        height: 100%;
        display: flex;
        flex-direction: column;

        > div:last-child {
          flex: 1;
        }
      }
    }
  `
)

const StyledQuote = styled(Quote)(
  () => css`
    border-radius: 8px;

    @media ${breakpoints.M} {
      flex: 1;
      min-width: 0;
      height: 100%;
    }
  `
)

export const FeaturedRestaurant = ({
  name,
  rating,
  specialty,
  photoUrl,
  isClosed,
  categories,
  isLoading,
  isNew,
  onClick,
  className,
  quoteText,
  quoteAuthor,
  quoteLocation,
}: FeaturedRestaurantProps) => {
  return (
    <Container className={className}>
      <CardWrapper>
        <StyledRestaurantCard
          name={name}
          rating={rating}
          specialty={specialty}
          photoUrl={photoUrl}
          isClosed={isClosed}
          categories={categories}
          isLoading={isLoading}
          isNew={isNew}
          onClick={onClick}
        />
      </CardWrapper>
      {!isLoading && <StyledQuote text={quoteText} author={quoteAuthor} location={quoteLocation} />}
    </Container>
  )
}
