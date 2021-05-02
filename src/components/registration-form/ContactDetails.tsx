import styled, { css } from 'styled-components'

import { Button } from '../Button'
import { Input } from '../forms/Input'
import { Body } from '../typography/Body'

const DisclaimerText = styled(Body)(
  ({ theme: { spacing } }) => css`
    margin-bottom: ${spacing.m};
  `
)

export const ContactDetails = ({ setForm, formData, navigation }: any) => {
  const { firstName, lastName, email, phone } = formData

  const { next } = navigation

  return (
    <div className="form">
      <Input
        label="First Name"
        placeholder="John"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <Input
        label="Last Name"
        placeholder="Doe"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="email address"
        value={email}
        onChange={setForm}
      />
      <Input
        label="Phone number"
        placeholder="phone number"
        name="phone"
        type="tel"
        value={phone}
        onChange={setForm}
      />
      <DisclaimerText size="XXS" type="span">
        We’ll only use your phone to call you about your order
      </DisclaimerText>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
