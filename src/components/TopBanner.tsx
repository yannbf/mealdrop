import React from 'react'
import styled, { css } from 'styled-components'

const Title = styled.h1<{ inverted: boolean }>(
  ({ inverted }) => css`
    color: ${inverted ? 'white' : '#2c2c2c'};
  `
)

const Container = styled.div<{ src: string }>(
  ({ src }) => css`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background: ${src ? `url(${src}) no-repeat 50%` : '#E5F8BC'};
    background-position: bottom;
    background-size: cover;
    height: 240px;
  `
)

export const TopBanner = ({ photoUrl, title }: any) => {
  return (
    <Container src={photoUrl}>
      <Title inverted={!!photoUrl}>{title}</Title>
    </Container>
  )
}
