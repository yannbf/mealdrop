import { Badge, Body, Card, Heading, Review, Skeleton } from '@droppy/design-system'
import styled, { css } from 'styled-components'

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

const StyledContent = styled.div(
  ({ theme: { color } }) => css`
    padding: 24px;
    background: ${color.cardBackground};
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

export const RestaurantCardSkeleton = () => (
  <Card data-testid="loading">
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
  </Card>
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
    <Card
      interactive
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
    </Card>
  )
}
