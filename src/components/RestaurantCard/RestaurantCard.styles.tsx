import styled, { css } from 'styled-components'

import { Badge } from '../Badge'
import { Body, Heading } from '../typography'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  &:hover {
    opacity: 0.9;
  }
`

export const StyledContent = styled.div(
  ({ theme: { color } }) => css`
    padding: 24px;
    background: ${color.cardBackground};
    border-radius: 0px 0px 8px 8px;
    .review-text {
      color: ${color.reviewText};
    }
  `
)

export const NewTag = styled.span`
  position: absolute;
  padding: 8px;
  background: #e5f8bc;
  display: inline-block;
  top: 0.5rem;
  left: 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  z-index: 1;
`

export const Closed = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  span {
    color: white;
    line-height: 210px;
  }
`

export const RestaurantImage = styled.img<{ $isClosed: boolean }>`
  height: 200px;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
  filter: ${({ $isClosed }) => ($isClosed ? 'grayscale(1)' : 'none')};
`
export const Description = styled(Body)`
  margin-top: 8px;
  margin-bottom: 24px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const StyledBadge = styled(Badge)`
  margin-top: 1.5rem;
  margin-right: 0.5rem;
`

export const StyleHeading = styled(Heading)`
  margin-bottom: 8px;
`
