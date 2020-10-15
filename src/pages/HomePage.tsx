import React from 'react'
import styled from 'styled-components'

import { RestaurantsSection } from '../components/RestaurantsSection'
import { CategoriesSection } from '../components/CategoriesSection'
import { categories } from '../stub/categories'
import { Banner } from '../components/Banner'
import { AwardWinningSection } from '../components/AwardWinningSection'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Spacing />
      <RestaurantsSection title="Our favorite picks" />
      <Spacing />
      <AwardWinningSection />
      <Spacing />
      <RestaurantsSection title="New arrivals" />
      <Spacing />
      <CategoriesSection categories={categories} />
      <Spacing />
    </>
  )
}
