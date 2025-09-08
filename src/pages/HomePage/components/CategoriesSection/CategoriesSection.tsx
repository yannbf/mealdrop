import { useNavigate, Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import styled from 'styled-components'

import { PageSection } from '../../../../components/PageSection'
import { Category, CategoryProps } from '../../../../components/Category'
import { IconButton } from '../../../../components/IconButton'
import { isMobile } from '../../../../helpers'

type CategoriesSectionProps = {
  categories: CategoryProps[]
}

const StyledLink = styled(Link)`
  width: 100%;
  margin-right: 1rem;
`

const PreviousButton = styled(IconButton)`
  position: absolute;
  left: 0;
`

const NextButton = styled(IconButton)`
  position: absolute;
  right: 0;
`

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  const navigate = useNavigate()

  const isOnMobile = isMobile()
  return (
    <PageSection
      title="Categories"
      topButtonLabel="View all categories"
      onTopButtonClick={() => navigate('/categories')}
    >
      <Carousel
        draggable={isOnMobile}
        partialVisible={isOnMobile}
        customLeftArrow={<PreviousButton name="arrow-left" />}
        customRightArrow={<NextButton name="arrow-right" />}
        responsive={{
          desktop: {
            breakpoint: { max: 5000, min: 1024 },
            items: 6,
            slidesToSlide: 3,
            paritialVisibilityGutter: 80,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            paritialVisibilityGutter: 50,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 3,
            paritialVisibilityGutter: 10,
          },
        }}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass={isOnMobile ? 'carousel-item' : ''}
      >
        {categories.map((category) => (
          <StyledLink key={category.id} to={`/categories/${category.id}`}>
            <Category round {...category} />
          </StyledLink>
        ))}
      </Carousel>
    </PageSection>
  )
}
