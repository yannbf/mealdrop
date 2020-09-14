import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div(
  ({ theme: { spacing, boxShadow } }) => css`
    display: flex;
    flex-direction: column;
    padding-bottom: ${spacing.m};
    label {
      padding-right: ${spacing.m};
    }

    input {
      box-shadow: ${boxShadow.inner};
      padding: 13px 16px;
      box-sizing: border-box;
      border-radius: 2px;
      border: 1px solid #bac3c3;
      margin-top: ${spacing.m};
    }
  `
)

const ItemForm = ({ label = '', type = 'text', ...otherProps }) => (
  <Container>
    {label && <label>{label}</label>}
    <input type={type} {...otherProps} />
  </Container>
)

export default ItemForm
