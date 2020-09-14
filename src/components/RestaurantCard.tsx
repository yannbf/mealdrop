import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export type RestaurantCardProps = {
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
  isLoading?: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

const Closed = styled.span`
  position: absolute;
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
  height: 240px;
  width: 100%;
  object-fit: cover;
  filter: ${({ $isClosed }) => ($isClosed ? 'grayscale(1)' : 'none')};
`

const RestaurantCardSkeleton = () => (
  <Container>
    <Skeleton height={140} width="100%" />
    <h2>
      <Skeleton width="50%"/>
    </h2>
    <hr />
    <p>
      <Skeleton />
    </p>
  </Container>
)

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const {
    photoUrl,
    name,
    id,
    specialty,
    isClosed = false,
    isLoading = false,
  } = restaurant

  if (isLoading) {
    return <RestaurantCardSkeleton />
  }

  return (
    <Container>
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
      <h2>{name}</h2>
      <hr />
      <p>{specialty}</p>
    </Container>
  )
}
