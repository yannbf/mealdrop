import React from 'react'
import styled, { css } from 'styled-components'
import { breakpoints } from '../../styles/breakpoints'
import { FooterCard } from '../FooterCard/FooterCard'
import { Logo } from '../Logo'

const FooterContainer = styled.div(
  ({ theme: { color } }) => css`
    min-height: 450px;
    color: ${color.white};
    background: ${color.footerBackground};
    padding: 2rem 0;

    hr {
      color: ${color.white};
      width: 100%;
    }
  `
)

const FooterTop = styled.div`
  display: grid;
  gap: 40px 24px;
  grid-template-columns: repeat(1, 1fr);
  @media ${breakpoints.S} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${breakpoints.L} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Footer = () => {
  const navigationLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Categories',
      href: '/categories',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Login',
      href: '/login',
    },
  ]

  const socialMediaLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      external: true,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      external: true,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      external: true,
    },
  ]

  return (
    <FooterContainer>
      <div className="container">
        <FooterTop>
          <Logo large logoOnly />
          <FooterCard title="Discover us" links={navigationLinks} />
          <FooterCard title="Our social media" links={socialMediaLinks} />
          <FooterCard title="Check our apps">
            <div className="footer-bottom">
              <img
                alt="app store link"
                style={{ width: '120px', marginBottom: '0.5rem' }}
                src="https://www.pete-app.com/wp-content/themes/PETE/style/public/images/downloadIos.png"
              />
              <img
                alt="google play link"
                style={{ width: '120px' }}
                src="https://help.richmondelt.com/hc/article_attachments/115008811623/android-app-store-latest.png"
              />
            </div>
          </FooterCard>
        </FooterTop>
      </div>
    </FooterContainer>
  )
}
