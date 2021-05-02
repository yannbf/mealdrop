import * as React from 'react';
import styled from 'styled-components'

import { Body } from '../typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export type ReviewProps = {
  rating?: number
}

const getReview = (rating?: number) => {
  if (!rating) {
    return 'No reviews yet'
  }

  let reviewText = 'Excellent'

  if (rating <= 4) {
    reviewText = 'Very good'
  }

  if (rating <= 2) {
    reviewText = 'Adequate'
  }

  return `★ ${rating.toFixed(1)} ${reviewText}`
}

export const Review: React.FC<ReviewProps> = ({ rating }) => (
  <Wrapper>
    {/* <Icon name="star" /> */}
    <Body size="S" type="span" className="review-text">
      {getReview(rating)}
    </Body>
  </Wrapper>
)
