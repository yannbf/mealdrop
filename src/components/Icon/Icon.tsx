import styled, { useTheme } from 'styled-components'

const StyledSVG = styled.svg`
  display: block;
`

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'cross'
  | 'cart'
  | 'minus'
  | 'plus'
  | 'moon'
  | 'sun'
  | 'star'

type IconProps = {
  name: IconName
  color?: string
  size?: number | string
}

export const Icon = ({ name, color, size = '1.5rem' }: IconProps) => {
  const { color: themeColor } = useTheme()
  return (
    <StyledSVG
      stroke={color || themeColor.primaryText}
      width={size}
      height={size}
      style={{ minWidth: size }}
    >
      <use xlinkHref={`/sprite-map.svg#${name}`} />
    </StyledSVG>
  )
}
