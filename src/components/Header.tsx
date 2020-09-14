import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(226, 226, 226) 0px -2px 0px inset;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    top: 0;
    left: 0;
    position: fixed;
    background: white;
    z-index: 2;
  }
`

export const LogoContainer = styled(Link)`
  width: 40px;
  display: flex;
  padding-left: 1rem;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 7px;
  }
`

export const Header: React.FC = ({ currentUser, signOut }: any) => (
  <HeaderContainer data-testid="header">
    <LogoContainer to="/">
      <img src="https://image.flaticon.com/icons/svg/1046/1046784.svg" className="App-logo" alt="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">HOME</OptionLink>
      <OptionLink to="/about">ABOUT</OptionLink>
      {currentUser ? (
        <OptionLink as="button" onClick={signOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/register">SIGN IN</OptionLink>
      )}
    </OptionsContainer>
  </HeaderContainer>
)

// const Header = () => (
//   <nav style={{ display: 'flex', borderBottom: '1px solid gray' }}>
//     <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/users">Users</Link>
//       </li>
//     </ul>
//   </nav>
// )
