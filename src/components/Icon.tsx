import React from 'react'
import styled from 'styled-components'
import Icons from '../assets/icons/sprite-map.svg'

const StyledSVG = styled.svg`
  display: block;
`

export const Icon = ({ name, color = '#202020', size = '1.5rem' }: any) => {
  return (
    <StyledSVG
      stroke={color}
      width={size}
      height={size}
      style={{ minWidth: size }}
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </StyledSVG>
  )
}
