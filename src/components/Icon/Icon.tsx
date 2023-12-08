import styled, { useTheme } from 'styled-components'
import { ReactNode } from 'react'

const StyledSVG = styled.svg`
  display: block;
`

type IconProps = {
  color?: string
  size?: number | string
  children?: ReactNode
}

export const Icon = ({ color, size = '1.5rem', children }: IconProps) => {
  const { color: themeColor } = useTheme()
  return (
    <StyledSVG
      stroke={color || themeColor.primaryText}
      width={size}
      height={size}
      style={{ minWidth: size }}
    >
      {children}
    </StyledSVG>
  )
}
