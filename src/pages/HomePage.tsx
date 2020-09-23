import React from 'react'
import styled from 'styled-components'

import { RestaurantsSection } from '../components/RestaurantsSection'
import { CategoriesSection } from '../components/CategoriesSection'
import { categories } from '../stub/categories'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'
import { Banner } from '../components/Banner'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`

const Divider = styled.hr`
  background-color: #e2e2e2;
  border: none;
  height: 1px;
  margin: 30px 0;
`

export const HomePage = () => {
  const history = useHistory()
  return (
    <>
      <Banner/>
      <RestaurantsSection />
      <Divider />
      <CategoriesSection categories={categories} />
      <ButtonContainer>
        <Button
          primary
          label="View all categories"
          onClick={() => history.push('/categories')}
        />
      </ButtonContainer>
    </>
  )
}
