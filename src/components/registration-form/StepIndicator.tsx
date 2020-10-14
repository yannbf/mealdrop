import React from 'react'
import styled, { css } from 'styled-components'

import { Body } from '../typography/Body'

const OuterBar = styled.div(
  ({ theme: { color } }) => css`
    height: 2px;
    width: 100%;
    background: ${color.inputBackground};
  `
)
const InnerBar = styled.div<{ progress: string }>(
  ({ progress, theme: { color } }) => css`
    background: ${color.labelActive};
    width: ${progress};
    height: 2px;
    transition: width 0.5s ease-in-out;
  `
)

export type StepIndicatorProps = {
  currentStep: number
  amountOfSteps: number
}

export const StepIndicator = ({ currentStep, amountOfSteps }: StepIndicatorProps) => {
  const progress = `${(currentStep / amountOfSteps) * 100}%`
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Body size="XS">
        Step {currentStep} of {amountOfSteps}
      </Body>
      <OuterBar>
        <InnerBar progress={progress} />
      </OuterBar>
    </div>
  )
}
