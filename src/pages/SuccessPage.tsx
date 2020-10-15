import React from 'react'
import styled, { css } from 'styled-components'
import ladies from '../assets/images/ladies-sushi.svg'
import { TopBanner } from '../components/TopBanner'
import { Heading } from '../components/typography/Heading'
import { breakpoints } from '../styles/breakpoints'

const Image = styled.div<{ src: string }>(
  ({ src }) => css`
    background: url(${src});
    width: 100%;
    height: 230px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
    position: fixed;
    bottom: 0;
    background-size: 600px;
    display: flex;
    justify-content: center;
    @media ${breakpoints.S} {
      height: 368px;
      background-size: 1000px;
    }
  `
)

const StyledHeading = styled(Heading)`
  position: absolute;
  top: 0;
`

export const SuccessPage = () => {
  return (
    <div>
      <TopBanner title="Order confirmed!" />
      <Image src={ladies}>
        <StyledHeading level={3}>Bon appetit</StyledHeading>
      </Image>
    </div>
  )
}
