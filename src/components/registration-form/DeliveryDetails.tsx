import React from 'react'

import { Button } from '../Button'
import { Input } from '../forms/Input'

export const DeliveryDetails = ({ setForm, formData, navigation }: any) => {
  const { address, city, postcode } = formData

  const { previous, next } = navigation

  return (
    <div className="form">
      <Input
        label="Streetname and housenumber"
        palcholder="Some street, 13"
        name="address"
        value={address}
        onChange={setForm}
      />
      <Input
        label="Postcode"
        placeholder="AAAAXX"
        name="postcode"
        value={postcode}
        onChange={setForm}
      />
      <Input
        label="City"
        placeholder="Amsterdam"
        name="city"
        value={city}
        onChange={setForm}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Button clear onClick={previous}>
          Previous
        </Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
