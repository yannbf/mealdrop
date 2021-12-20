import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { PageTemplate } from '../../templates/PageTemplate'
import { TopBanner } from '../../components/TopBanner'
import { Body } from '../../components/typography/Body'
import { Heading } from '../../components/typography/Heading'
import { categories } from '../../stub/categories'

import { CategoryList } from './components/CategoryList'

const StyledHeading = styled(Heading)`
  margin-top: 4.5rem;
`

const StyledBody = styled(Body)`
  margin-bottom: 2.5rem;
`

export const CategoryListPage = () => {
  const navigate = useNavigate()
  return (
    <PageTemplate>
      <TopBanner title="Categories" onBackClick={() => navigate(-1)} />
      <div className="container">
        <StyledHeading level={2}>What’s on the menu?</StyledHeading>
        <StyledBody>
          Feeling like having pizza? How about Sushi? Satisfy your cravings with a few quick clicks
          and enjoy the world of delivery! Check a great selection of restaurants by selecting a
          category below.
        </StyledBody>
        <CategoryList categories={categories} />
      </div>
    </PageTemplate>
  )
}
