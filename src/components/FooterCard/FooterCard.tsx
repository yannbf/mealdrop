import { FooterCard as DsFooterCard } from '@droppy/design-system'
import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

type FooterCardProps = {
  title: string
  links?: {
    external?: boolean
    name: string
    href: string
  }[]
}

const StyledFooterCard = styled(DsFooterCard)(
  ({ theme: { color } }) => css`
    color: ${color.white};
  `
)

export const FooterCard: React.FC<React.PropsWithChildren<FooterCardProps>> = ({
  title,
  links = [],
  children,
  ...rest
}) => (
  <StyledFooterCard
    title={title}
    links={links.map(({ external, name, href }) => ({
      name,
      href,
      external,
      render: external ? undefined : <RouterLink to={href} />,
    }))}
    {...rest}
  >
    {children}
  </StyledFooterCard>
)
