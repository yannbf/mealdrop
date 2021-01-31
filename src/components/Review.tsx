import React from 'react'

import { Body } from './typography/Body'

export type ReviewProps = {
  rating?: number
}

const getReview = (rating?: number) => {
  if (!rating) {
    return 'No reviews yet'
  }

  if (rating === 5) {
    return 'Excellent'
  }

  if (rating >= 4) {
    return 'Very good'
  }

  if (rating >= 2) {
    return 'Adequate'
  }

  return 'Very poor'
}

export const Review: React.FC<ReviewProps> = ({ rating }) => (
  <Body size="S" type="span" className="review-text">
    ★ {rating?.toFixed(1)} {getReview(rating)}
  </Body>
)
