import styled, { css, useTheme, keyframes } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'
import { Heading } from '../typography'

const colors = {
  light: ['#61D8DE', '#4CC8C0', '#36C1BF', '#36C1BF', '#22ACA7', '#22ACA7', '#B1DCE3'],
  dark: ['#E4F7BB', '#D2E29A', '#DAEAAE', '#DAEAAE', '#C6D88B', '#C6D88B', '#FFFFFF'],
}

const shineColors = {
  light: '#9FF4F1',
  dark: '#EFFFBB',
}

const shine = (color: string) => keyframes`
  to {
    fill: ${color};
  }
`

const pathStyles = (color: string, delay: number, animated: boolean) => css`
  animation: ${animated ? shine(color) : 'none'} 400ms ease-in;
  animation-delay: ${delay}ms;
  animation-iteration-count: 3;
  &:hover {
    fill: ${color};
  }
`

const SvgContainer = styled.svg<{ $large: boolean; $logoOnly: boolean; $animated: boolean }>(
  ({ $large, $logoOnly, theme: { name }, $animated }) => css`
    .logo--ear-top-left {
      ${pathStyles(shineColors[name], 50, $animated)};
    }
    .logo--ear-bottom-left {
      ${pathStyles(shineColors[name], 100, $animated)};
    }
    .logo--face-left {
      ${pathStyles(shineColors[name], 150, $animated)};
    }
    .logo--face-right {
      ${pathStyles(shineColors[name], 200, $animated)};
    }
    .logo--ear-bottom-right {
      ${pathStyles(shineColors[name], 250, $animated)};
    }
    .logo--ear-top-right {
      ${pathStyles(shineColors[name], 300, $animated)};
    }
    padding-right: ${$logoOnly ? '0' : '0.75rem'};
    height: ${$large ? '75px' : '24px'};
    @media ${breakpoints.S} {
      height: ${$large ? '150px' : '24px'};
    }
  `
)

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledHeading = styled(Heading)(
  ({
    theme: {
      typography: { fontSize },
    },
  }) => css`
    font-size: ${fontSize.heading4};
    letter-spacing: unset;
  `
)

type LogoProps = {
  large?: boolean
  logoOnly?: boolean
  animated?: boolean
}

export const Logo = ({ large = false, logoOnly = false, animated = false }: LogoProps) => {
  const themeName = useTheme().name
  const fillColors = colors[themeName]

  return (
    <LogoContainer>
      <SvgContainer
        $animated={animated}
        $large={large}
        $logoOnly={logoOnly}
        viewBox="0 0 23 20"
        fill="none"
      >
        <path
          className="logo--face-left"
          d="M11.74 19.1662L6.66566 14.0788L0.82428 11.0619L1.76834 4.49574L0.82428 0.029541L11.74 2.1887V19.1662Z"
          fill={fillColors[0]}
        />
        <path
          className="logo--face-right"
          d="M11.74 19.1366L16.8143 14.0493L22.6557 11.0619L21.7116 4.49574L22.6557 0.029541L11.74 2.1887V19.1366Z"
          fill={fillColors[1]}
        />
        <path
          className="logo--ear-bottom-right"
          d="M22.6262 10.8549L14.4246 2.72113L22.6262 0L21.7411 4.61408L22.6262 10.8549Z"
          fill={fillColors[2]}
        />
        <path
          className="logo--ear-bottom-left"
          d="M0.883118 10.8549L9.11415 2.69155L0.883118 0L1.79768 4.61408L0.883118 10.8549Z"
          fill={fillColors[3]}
        />
        <path
          className="logo--ear-top-right"
          d="M21.7115 4.55497C21.564 4.58455 14.454 2.78033 14.454 2.78033L22.5671 0.0592041L21.7115 4.55497Z"
          fill={fillColors[4]}
        />
        <path
          className="logo--ear-top-left"
          d="M1.79794 4.58452C1.94545 4.6141 9.05541 2.80987 9.05541 2.80987L0.942383 0.0887451L1.79794 4.58452Z"
          fill={fillColors[5]}
        />
        <path
          className="logo--nose"
          d="M13.3626 17.5394L11.74 16.4451L10.1174 17.5394L11.74 19.1366L13.3626 17.5394Z"
          fill={fillColors[6]}
        />
      </SvgContainer>
      {!logoOnly && <StyledHeading level={2}>MealDrop</StyledHeading>}
    </LogoContainer>
  )
}
