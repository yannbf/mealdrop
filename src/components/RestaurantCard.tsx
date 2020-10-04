import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export type RestaurantCardProps = {
  className?: string
  restaurant: Restaurant
}

export type Restaurant = {
  name: string
  id?: string
  mapsUrl?: string
  url?: string
  address?: string
  specialty: string
  photoUrl: string
  isClosed?: boolean
  categories?: string[]
  isLoading?: boolean
  isNew?: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
`

const StyledContent = styled.div`
  padding: 24px;
  background: #f9f9f9;
  border-radius: 0px 0px 8px 8px;
`

const StyledPill = styled.div`
  padding: 8px;
  background: #f2f2f2;
  color: #7b7b7b;
  border-radius: 4px;
  display: inline-block;
`

const NewTag = styled.span`
  position: absolute;
  padding: 8px;
  background: #e5f8bc;
  display: inline-block;
  top: 0.5rem;
  left: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  z-index: 2;
`

const Closed = styled.span`
  position: absolute;
  font-weight: bold;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  line-height: 250px;
  z-index: 2;
`

const RestaurantImage = styled.img<{ $isClosed: boolean }>`
  height: 200px;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  filter: ${({ $isClosed }) => ($isClosed ? 'grayscale(1)' : 'none')};
`
const Description = styled.p`
  font-size: 14px;
  max-height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const RestaurantCardSkeleton = () => (
  <Container>
    <Skeleton height={200} width="100%" />
    <StyledContent>
      <h2 style={{ margin: 0 }}>
        <Skeleton width="50%" />
      </h2>
      <span>
        <Skeleton width="65%" />
      </span>
      <Description>
        <Skeleton />
      </Description>
      <p>
        <Skeleton width="20%" />
      </p>
    </StyledContent>
  </Container>
)

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  className
}) => {
  const {
    photoUrl,
    name,
    id,
    specialty,
    isClosed = false,
    isLoading = false,
    isNew = false,
  } = restaurant

  if (isLoading) {
    return <RestaurantCardSkeleton />
  }

  return (
    <Container className={className}>
      {isNew && <NewTag>new</NewTag>}
      <Link
        to={`/restaurants/${id}`}
        style={{ position: 'relative', display: 'flex' }}
      >
        {isClosed && <Closed>This restaurant is closed.</Closed>}
        <RestaurantImage
          $isClosed={isClosed}
          loading="lazy"
          src={photoUrl}
          alt="restaurant"
        />
      </Link>
      <StyledContent>
        <h2 style={{ margin: 0 }}>{name} </h2>
        <span style={{ color: '#6D868A' }}>★ 4.2 Very Good</span>
        <Description>{specialty}</Description>
        {restaurant.categories?.map((category) => (
          <StyledPill>{category}</StyledPill>
        ))}
      </StyledContent>
    </Container>
  )
}
