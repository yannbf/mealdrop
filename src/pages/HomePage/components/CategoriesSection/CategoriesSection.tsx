import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

import { PageSection } from '../../../../components/PageSection'
import { Category, CategoryProps } from '../../../../components/Category'
import { Carousel } from '../../../../components/Carousel'

type CategoriesSectionProps = {
  categories: CategoryProps[]
}

const StyledLink = styled(Link)`
  width: 100%;
  margin-right: 1rem;
`

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  const navigate = useNavigate()

  return (
    <PageSection
      title="Categories"
      topButtonLabel="View all categories"
      onTopButtonClick={() => navigate('/categories')}
    >
      <Carousel
        itemsPerView={{ mobile: 2, tablet: 3, desktop: 6 }}
        slidesToScroll={{ mobile: 3, desktop: 3 }}
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
