import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styled, { css, useTheme } from 'styled-components'

import { Body, Heading } from '../typography'
import { Badge } from '../Badge'
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

const NewTag = styled.span(
  ({
    theme: {
      color,
      borderRadius,
      typography: { fontSize, fontWeight },
    },
  }) => css`
    position: absolute;
    padding: 8px;
    background: ${color.newRestaurantTag};
    display: inline-block;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: ${borderRadius.s};
    font-size: ${fontSize.heading4};
    font-weight: ${fontWeight.bold};
    z-index: 1;
  `
)

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
  margin-top: 1.5rem;
  margin-right: 0.5rem;
`

const StyledHeading = styled(Heading)(
  ({
    theme: {
      spacing,
      typography: { fontSize },
    },
  }) => css`
    font-size: ${fontSize.heading4};
    margin-bottom: ${spacing.xs};
  `
)

export const RestaurantCardSkeleton = () => {
  const { color } = useTheme()
  return (
    /* @ts-expect-error wrong types! */
    <SkeletonTheme color={color.skeletonBase} highlightColor={color.skeletonHighlight}>
      <Container data-testid="loading">
        <Skeleton height={200} width="100%" style={{ borderRadius: '4px 4px 0 0' }} />
        <StyledContent>
          <StyledHeading level={2}>
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
    </SkeletonTheme>
  )
}

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
      {isNew && <NewTag>new</NewTag>}
      <ImageContainer>
        {isClosed && (
          <Closed>
            <Body type="span">This restaurant is closed.</Body>
          </Closed>
        )}
        <RestaurantImage $isClosed={isClosed} loading="lazy" src={photoUrl} alt="restaurant" />
      </ImageContainer>
      <StyledContent>
        <StyledHeading level={2}>{name}</StyledHeading>
        <Review rating={rating} />
        <Description fontWeight="regular">{specialty}</Description>
        {categories?.map((category) => <StyledBadge key={category} text={category} />)}
      </StyledContent>
    </Container>
  )
}
