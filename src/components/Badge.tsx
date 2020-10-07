import React from 'react'
import styled from 'styled-components'

import { Body } from './typography/Body'

const Container = styled.div`
  padding: 3px 8px;
  background: #f2f2f2;
  border-radius: 4px;
  display: inline-block;
`

export type BadgeProps = {
  text: string
}

export const Badge = ({ text }: BadgeProps) => (
  <Container>
    <Body type="span" size="S" color="#636871">
      {text}
    </Body>
  </Container>
)
