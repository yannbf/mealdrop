import React from 'react'
import styled from 'styled-components'
import Icons from '../assets/icons/sprite-map.svg'

const StyledSVG = styled.svg`
  display: block;
`

export const Icon = ({ name, color, size = 24 }: any) => {
  return (
    <StyledSVG
      fill={color}
      width={size}
      height={size}
      style={{ minWidth: size }}
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </StyledSVG>
  )
}
