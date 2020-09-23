import React from 'react'
import styled from 'styled-components'

import { RestaurantsSection } from '../components/RestaurantsSection'
import { CategoriesSection } from '../components/CategoriesSection'
import { categories } from '../stub/categories'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'
import { Banner } from '../components/Banner'
import { AwardWinningSection } from '../components/AwardWinningSection'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const HomePage = () => {
  const history = useHistory()
  return (
    <>
      <Banner />
      <Spacing />
      <RestaurantsSection />
      <Spacing />
      <AwardWinningSection />
      <Spacing />
      <CategoriesSection categories={categories} />
      <Spacing />
      <ButtonContainer>
        <Button
          primary
          label="View all categories"
          onClick={() => history.push('/categories')}
        />
      </ButtonContainer>
      <Spacing />
    </>
  )
}
