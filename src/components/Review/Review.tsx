import styled from 'styled-components'

import { Body } from '../typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const StyledBody = styled(Body)(
  ({ theme: { color } }) => `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${color.reviewText};
`
)

type ReviewProps = {
  rating?: number
}

const getReview = (rating?: number) => {
  if (!rating) {
    return 'No reviews yet'
  }

  let reviewText = 'Very poor'

  if (rating >= 2 && rating < 4) {
    reviewText = 'Adequate'
  } else if (rating >= 4 && rating < 5) {
    reviewText = 'Very good'
  } else if (rating >= 5) {
    reviewText = 'Excellent'
  }

  return `★ ${rating.toFixed(1)} ${reviewText}`
}

export const Review = ({ rating }: ReviewProps) => (
  <Wrapper>
    <StyledBody size="S" type="span" className="review-text">
      {getReview(rating)}
    </StyledBody>
  </Wrapper>
)
