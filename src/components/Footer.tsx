import React from 'react'
import styled, { css } from 'styled-components'
import { FooterCard } from './FooterCard'

const FooterContainer = styled.div(
  ({ theme: { color: colors } }) => css`
    color: ${colors.white};
    background: ${colors.black};
    padding: 2rem 5rem;

    hr {
      color: ${colors.white};
      width: 100%;
    }
  `
)

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
      <div className="footer-top">
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
      </div>
      <div className="footer-bottom">
        <hr />
        <small className="copyright">Some text, copyright 2020</small>
      </div>
    </FooterContainer>
  )
}
