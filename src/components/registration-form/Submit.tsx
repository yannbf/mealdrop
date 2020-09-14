import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../Button'
import styled from 'styled-components'

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5rem;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Submit = () => {
  const history = useHistory()
  return (
    <Container>
      <h3>That's it, your account was created! </h3>
      <p>
        You are part of this now, check your profile if you want to tweak with
        configurations or just go back to the restaurant list.
      </p>
      <img
        alt="celebration"
        width="210px"
        src="https://www.flaticon.com/svg/static/icons/svg/3187/3187874.svg"
      />
      <ButtonSection>
        <Button label="Back to restaurants" onClick={() => history.push('/')} />
        <Button
          primary
          label="To my profile"
          onClick={() => history.push('profile')}
        />
      </ButtonSection>
    </Container>
  )
}

export default Submit
