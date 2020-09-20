import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const FooterCardContainer = styled.div(
  ({ theme: { color: colors, spacing, borderRadius: borderRadiuses } }) => css`
    color: ${colors.white};
    background: ${colors.black};

    padding: ${spacing.m};
    background-color: ${colors.grey};
    border-radius: ${borderRadiuses.xs};

    h3 {
      margin: 0;
      padding-bottom: ${spacing.xs};
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
  `
)

export const FooterCard = ({ title, links, children }: any) => (
  <FooterCardContainer>
    <h3 style={{ color: 'white' }}>{title}</h3>
    {links?.length > 0 && (
      <ul>
        {links.map(({ external, name, href }: any) => (
          <li key={name}>
            <p>
              {external ? (
                <a target="_blank" rel="noopener noreferrer" href={href}>
                  {name}
                </a>
              ) : (
                <Link to={href}>{name}</Link>
              )}
            </p>
          </li>
        ))}
      </ul>
    )}
    {children}
  </FooterCardContainer>
)
