import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Body } from '../typography/Body'
import { Heading } from '../typography/Heading'

const FooterCardContainer = styled.div(
  ({ theme: { color: colors, spacing, borderRadius: borderRadiuses } }) => css`
    color: ${colors.white};

    border-radius: ${borderRadiuses.xs};
    h4 {
      color: white;
      margin-bottom: ${spacing.xs};
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      color: ${colors.white};
      text-decoration: none;
      cursor: pointer;
    }

    p {
      margin-top: ${spacing.xs};
      margin-bottom: ${spacing.xs};
    }
  `
)

export const FooterCard = ({ title, links, children }: any) => (
  <FooterCardContainer>
    <Heading level={4}>{title}</Heading>
    {links?.length > 0 && (
      <ul>
        {links.map(({ external, name, href }: any) => (
          <li key={name}>
            <Body>
              {external ? (
                <a target="_blank" rel="noopener noreferrer" href={href}>
                  {name}
                </a>
              ) : (
                <Link to={href}>{name}</Link>
              )}
            </Body>
          </li>
        ))}
      </ul>
    )}
    {children}
  </FooterCardContainer>
)
