import React from 'react'
import styled from 'styled-components'

import { RestaurantsSection } from '../components/RestaurantsSection'
import { CategoriesSection } from '../components/CategoriesSection'
import { categories } from '../stub/categories'
import { HeroImage } from '../components/HeroImage'
import first from '../assets/images/background-1.png'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'

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

// const Card = styled.div`
//   background-color: white;
//   margin: 30px 0;
// `
// const CardContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   z-index: 5;
// `

// const SearchCard = () => {
//   return (
//     <CardContainer>
//       <h2>Got milk?</h2>
//       <p>Get ready to have your favorite food delivered to your door!</p>
//     </CardContainer>
//   )
// }

export const HomePage = () => {
  const history = useHistory()
  return (
    <>
      <HeroImage url={first} />
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
