import type { CSSProperties } from 'react'
import { Badge, Body, Heading } from '@droppy/design-system'
import styled, { css, keyframes } from 'styled-components'

import { Review } from '../Review'

type RestaurantCardProps = {
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
}

const Container = styled.div(
  ({ theme: { borderRadius } }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadius.s};
    width: 100%;
    max-width: 500px;

    &:hover {
      opacity: 0.9;
    }
  `
)

const StyledContent = styled.div(
  ({ theme: { color } }) => css`
    padding: 24px;
    background: ${color.cardBackground};
    border-radius: 0px 0px 8px 8px;
  `
)

const NewBadge = styled(Badge)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1;
`

const Closed = styled.div(
  ({ theme: { color } }) => css`
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    span {
      color: ${color.white};
      line-height: 210px;
    }
  `
)

const ImageContainer = styled.div`
  position: relative;
  display: flex;
`
const RestaurantImage = styled.img<{ $isClosed: boolean }>`
  height: 200px;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  filter: ${({ $isClosed }) => ($isClosed ? 'grayscale(1)' : 'none')};
`
const Description = styled(Body)`
  margin-top: 8px;
  margin-bottom: 24px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const StyledBadge = styled(Badge)`
  margin-top: 1.375rem;
  margin-right: 0.5rem;
`

const StyledHeading = styled(Heading)(
  ({ theme: { spacing } }) => css`
    margin-bottom: ${spacing.xs};
  `
)

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const SkeletonBlock = styled.span<{ $width: string; $height: string }>(
  ({ theme: { color }, $width, $height }) => css`
    display: block;
    width: ${$width};
    height: ${$height};
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      ${color.skeletonBase} 25%,
      ${color.skeletonHighlight} 37%,
      ${color.skeletonBase} 63%
    );
    background-size: 400px 100%;
    animation: ${shimmer} 1.4s ease infinite;
  `
)

type SkeletonProps = {
  width?: string
  height?: string | number
  style?: CSSProperties
}

const Skeleton = ({ width = '100%', height = '1em', style }: SkeletonProps) => (
  <SkeletonBlock
    $width={width}
    $height={typeof height === 'number' ? `${height}px` : height}
    style={style}
  />
)

export const RestaurantCardSkeleton = () => (
  <Container data-testid="loading">
    <Skeleton height={200} width="100%" />
    <StyledContent>
      <StyledHeading level={2} size={4}>
        <Skeleton width="50%" />
      </StyledHeading>
      <Body type="span">
        <Skeleton width="35%" />
      </Body>
      <Description>
        <Skeleton />
      </Description>
      <Body type="span">
        <Skeleton width="25%" height="23px" style={{ marginTop: 24 }} />
      </Body>
    </StyledContent>
  </Container>
)

export const RestaurantCard = ({
  photoUrl,
  name,
  specialty,
  rating,
  isClosed = false,
  isLoading = false,
  categories,
  isNew = false,
  className,
  onClick,
}: RestaurantCardProps) => {
  if (isLoading) {
    return <RestaurantCardSkeleton />
  }

  return (
    <Container
      className={className}
      data-testid="restaurant-card"
      onClick={isClosed ? undefined : onClick}
    >
      {isNew && <NewBadge text="new" variant="positive" />}
      <ImageContainer>
        {isClosed && (
          <Closed>
            <Body type="span">This restaurant is closed.</Body>
          </Closed>
        )}
        <RestaurantImage $isClosed={isClosed} loading="lazy" src={photoUrl} alt="restaurant" />
      </ImageContainer>
      <StyledContent>
        <StyledHeading level={2} size={4}>
          {name}
        </StyledHeading>
        <Review rating={rating} />
        <Description fontWeight="regular">{specialty}</Description>
        {categories?.map((category) => (
          <StyledBadge key={category} text={category} />
        ))}
      </StyledContent>
    </Container>
  )
}
