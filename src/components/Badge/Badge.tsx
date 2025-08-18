import styled, { css, useTheme } from 'styled-components'

import { Body } from '../typography'
import { Icon, IconName } from '../Icon'

interface ContainerProps {
  squared?: boolean
  uppercase?: boolean
}

const Container = styled.div<ContainerProps>(
  ({ theme: { color, borderRadius }, squared }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${squared ? '0' : borderRadius.xs};
    display: inline-block;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    span {
      color: ${color.badgeText};
    }
  `
)

type BadgeProps = {
  text: string
  className?: string
  icon?: IconName
  squared?: boolean
  uppercase?: boolean
}

export const Badge = ({ text, className, icon, squared, uppercase }: BadgeProps) => {
  const { color } = useTheme()
  let content = text

  if (uppercase) {
    content = text.toUpperCase()
  }

  return (
    <Container className={className} squared={squared} uppercase={uppercase}>
      {icon && <Icon size={16} name={icon} color={color.badgeText} />}
      <Body type="span" size="S">
        {content}
      </Body>
    </Container>
  )
}
