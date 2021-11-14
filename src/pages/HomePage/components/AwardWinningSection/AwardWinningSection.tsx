import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import restaurants from '../../../../assets/images/restaurants.png'
import { breakpoints } from '../../../../styles/breakpoints'
import { Button } from '../../../../components/Button'
import { Heading } from '../../../../components/typography'

const StyledButton = styled(Button)`
  margin-top: 2.5rem;
`

const Container = styled.div(
  ({ theme: { color } }) => css`
    position: relative;
    overflow: hidden;
    background: ${color.topBannerBackground};
    width: 100%;
    display: flex;
    height: 487px;
  `
)

const ContentContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
`

const LeftContainer = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  height: 487px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media ${breakpoints.M} {
    flex: 0.5;
  }
`

const SlidingBackground = styled.div`
  background: url(${restaurants}) repeat-y;
  height: 5076px;
  animation: slide 60s linear infinite;
  width: 100%;
  display: none;

  @keyframes slide {
    0% {
      transform: translate3d(0, -1692px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${breakpoints.M} {
    display: block;
    flex: 0.5;
  }
`

export const AwardWinningSection = () => (
  <Container>
    <ContentContainer className="container">
      <LeftContainer>
        <Heading className="bolder">Award winning</Heading>
        <Heading>The best restaurants near you!</Heading>
        <Link to="/categories">
          <StyledButton>Explore best restaurants</StyledButton>
        </Link>
      </LeftContainer>
      <SlidingBackground />
    </ContentContainer>
  </Container>
)
