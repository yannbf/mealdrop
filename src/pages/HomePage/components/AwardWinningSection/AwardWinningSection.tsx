import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'

import restaurants from '../../../../assets/images/restaurants.png'
import { breakpoints } from '../../../../styles/breakpoints'
import { Heading } from '../../../../components/typography'

// theme.Button carries the base chrome via @droppy/theme/styles.css; the
// margin-top and responsive padding bump are this call site's own CSS —
// duplicated per site by design (milestone 1 has no shared Button wrapper).
const StyledButton = styled(BaseButton)`
  z-index: 1;
  margin-top: 2.5rem;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
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
          <StyledButton className={theme.Button}>Explore best restaurants</StyledButton>
        </Link>
      </LeftContainer>
      <SlidingBackground />
    </ContentContainer>
  </Container>
)
