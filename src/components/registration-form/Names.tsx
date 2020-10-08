import React from 'react'

import { Button } from '../Button'
import { Input } from '../forms/Input'
import { Body } from '../typography/Body'
import { Heading } from '../typography/Heading'

const Names = ({ setForm, formData, navigation }: any) => {
  const { firstName, lastName, email, phone } = formData

  const { next } = navigation

  return (
    <div className="form">
      <Heading level={4}>Contact details</Heading>
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
      <Body size="XXS">
        We’ll only use your phone to call you about your order
      </Body>
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button primary onClick={next}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Names
