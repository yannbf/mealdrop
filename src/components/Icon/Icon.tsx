import React from 'react'
import styled, { useTheme } from 'styled-components'

import Icons from '../../assets/icons/sprite-map.svg'

const StyledSVG = styled.svg`
  display: block;
`

export const Icon = ({ name, color, size = '1.5rem' }: any) => {
  const { color: themeColor } = useTheme()
  return (
    <StyledSVG
      stroke={color || themeColor.primaryText}
      width={size}
      height={size}
      style={{ minWidth: size }}
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </StyledSVG>
  )
}
