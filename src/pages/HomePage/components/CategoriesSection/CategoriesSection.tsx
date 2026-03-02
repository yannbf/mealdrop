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
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: '200px',
          overflowX: 'auto',
          gap: '16px',
          height: '440px',
        }}
        className="carousel-container"
      >
        {categories.map((category) => (
          <StyledLink key={category.id} to={`/categories/${category.id}`}>
            <Category round {...category} />
          </StyledLink>
        ))}
      </div>
    </PageSection>
  )
}
