import styled, { css } from 'styled-components'

export type HeroImageProps = {
  url: string
  shadowed?: boolean
}

export const HeroImage = styled.div<HeroImageProps>(
  ({ url, shadowed }) => css`
    width: 100%;
    min-height: 450px;
    display: flex;
    position: ${shadowed ? 'relative' : 'initial'};
    background: url(${url}) no-repeat 50%;
    background-size: cover;

    ${shadowed &&
    css`
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(
          to bottom,
          rgba(12, 16, 28, 0) 26%,
          rgba(12, 16, 28, 0.2) 45%,
          rgba(12, 16, 28, 0.4) 59%,
          #17191d
        );
      }
    `}
  `
)

// const LargeImage = styled.div<{ $src: string }>`
//   object-fit: cover;
//   max-height: 50vh;
//   width: 100%;
//   height: 100%;
//   background: ${({ $src }) => `url(${$src}) no-repeat 50%`};
// `

// export const HeroImage = ({ url, shadowed = false }: HeroImageProps) => (
//   <Container $shadowed={shadowed} $src={url}>
//     <LargeImage $src={url} />
//   </Container>
// )
