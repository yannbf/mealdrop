import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Button } from '../../../../components/Button'
import ladies from '../../../../assets/images/ladies.svg'
import { breakpoints } from '../../../../styles/breakpoints'
import { Heading } from '../../../../components/typography'

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
        <Button>View all restaurants</Button>
      </Link>
    </ContentContainer>
    <Image src={ladies} />
  </Container>
)
