import { Link } from 'react-router-dom'
import { Button as BaseButton } from '@base-ui/react/button'
import theme from '@droppy/theme'
import styled, { css } from 'styled-components'

import ladies from '../../../../assets/images/ladies.svg'
import { breakpoints } from '../../../../styles/breakpoints'
import { Heading } from '../../../../components/typography'

// theme.Button carries the base chrome via @droppy/theme/styles.css; the
// responsive padding bump is this call site's own CSS — duplicated per site
// by design (milestone 1 has no shared Button wrapper).
const StyledButton = styled(BaseButton)`
  z-index: 1;

  @media ${breakpoints.M} {
    padding: 0.875rem 1.5rem;
  }
`

const Container = styled.div(
  ({ theme: { color } }) => css`
    background: ${color.bannerBackground};
    width: 100%;
    position: relative;
    height: 410px;
    padding-top: 3.75rem;

    @media ${breakpoints.M} {
      padding-top: 6rem;
      height: 566px;
    }
  `
)

const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`

const Image = styled.div<{ src: string }>(
  ({ src }) => css`
    background: url(${src});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 700px;
    position: absolute;
    bottom: 0;
    @media ${breakpoints.M} {
      background-size: 1000px;
    }
  `
)

const StyledHeading = styled(Heading)(
  ({ theme: { color } }) => `
  margin-bottom: 2.5rem;
  padding: 0 2rem;
  strong {
    color: ${color.primaryText};
    font-weight: 900;
  }
`
)

export const Banner = () => (
  <Container>
    <ContentContainer>
      <StyledHeading level={2}>
        <strong>Hungry?</strong> find your next meal
      </StyledHeading>
      <Link to="/categories">
        <StyledButton className={theme.Button}>View all restaurants</StyledButton>
      </Link>
    </ContentContainer>
    <Image src={ladies} />
  </Container>
)
