import { Children, type ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import styled, { css } from 'styled-components'

import { IconButton } from '../IconButton'
import { breakpoints, viewports } from '../../styles/breakpoints'

export type ItemsPerView = {
  mobile: number
  tablet: number
  desktop: number
}

export type CarouselProps = {
  children: ReactNode
  /** Number of items visible per breakpoint (mobile-first). */
  itemsPerView: ItemsPerView
  /** How many items each arrow click advances, per breakpoint (defaults to 1). */
  slidesToScroll?: Partial<ItemsPerView>
}

const Root = styled.div`
  position: relative;
`

const Viewport = styled.div`
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
`

const Slide = styled.div<{ $items: ItemsPerView; $dimmed: boolean }>(
  ({ $items, $dimmed }) => css`
    flex: 0 0 ${100 / $items.mobile}%;
    min-width: 0;
    padding-right: 20px;
    opacity: ${$dimmed ? 0.5 : 1};
    transition: opacity 200ms linear;

    @media ${breakpoints.S} {
      flex-basis: ${100 / $items.tablet}%;
    }

    @media ${breakpoints.L} {
      flex-basis: ${100 / $items.desktop}%;
    }
  `
)

const NavButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  /* Arrows only appear on desktop; smaller screens scroll by dragging. */
  @media (max-width: ${viewports.L - 1}px) {
    display: none;
  }
`

const PreviousButton = styled(NavButton)`
  left: 0;
`

const NextButton = styled(NavButton)`
  right: 0;
`

export const Carousel = ({ children, itemsPerView, slidesToScroll }: CarouselProps) => {
  const step = { mobile: 1, tablet: 1, desktop: 1, ...slidesToScroll }
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      // watchDrag defaults to true, so both mouse and touch dragging work.
      // A slide counts as "in view" only when almost fully visible, so partially
      // scrolled slides are dimmed (see below).
      inViewThreshold: 0.95,
    },
    // Horizontal wheel / trackpad and shift+scroll move the carousel;
    // vertical scrolling still scrolls the page.
    [WheelGesturesPlugin()]
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [slidesInView, setSlidesInView] = useState<number[]>([])
  const slideCount = Children.count(children)

  // How many slides an arrow click advances at the current breakpoint.
  const stepForViewport = useCallback(() => {
    if (typeof globalThis.matchMedia === 'function') {
      if (globalThis.matchMedia(breakpoints.L).matches) return step.desktop
      if (globalThis.matchMedia(breakpoints.S).matches) return step.tablet
    }
    return step.mobile
  }, [step.mobile, step.tablet, step.desktop])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollTo(Math.max(emblaApi.selectedScrollSnap() - stepForViewport(), 0))
  }, [emblaApi, stepForViewport])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    const lastSnap = emblaApi.scrollSnapList().length - 1
    emblaApi.scrollTo(Math.min(emblaApi.selectedScrollSnap() + stepForViewport(), lastSnap))
  }, [emblaApi, stepForViewport])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  const onSlidesInView = useCallback(() => {
    if (!emblaApi) return
    setSlidesInView(emblaApi.slidesInView())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    onSlidesInView()
    emblaApi
      .on('select', onSelect)
      .on('slidesInView', onSlidesInView)
      .on('reInit', onSelect)
      .on('reInit', onSlidesInView)
    return () => {
      emblaApi
        .off('select', onSelect)
        .off('slidesInView', onSlidesInView)
        .off('reInit', onSelect)
        .off('reInit', onSlidesInView)
    }
  }, [emblaApi, onSelect, onSlidesInView])

  // Re-measure when the set of slides changes (e.g. loading skeletons swapped
  // for the real content), otherwise Embla keeps stale sizes and can't scroll.
  useEffect(() => {
    emblaApi?.reInit()
  }, [emblaApi, slideCount])

  return (
    <Root>
      {canScrollPrev && (
        <PreviousButton name="arrow-left" aria-label="Previous" onClick={scrollPrev} />
      )}
      <Viewport ref={emblaRef}>
        <Container>
          {Children.map(children, (child, index) => (
            <Slide
              key={index}
              $items={itemsPerView}
              // Before Embla reports (empty list) nothing is dimmed, to avoid a flash.
              $dimmed={slidesInView.length > 0 && !slidesInView.includes(index)}
            >
              {child}
            </Slide>
          ))}
        </Container>
      </Viewport>
      {canScrollNext && <NextButton name="arrow-right" aria-label="Next" onClick={scrollNext} />}
    </Root>
  )
}
