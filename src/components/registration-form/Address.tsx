import React from 'react'

import { Button } from '../Button'
import { Heading } from '../typography/Heading'
import { Input } from '../forms/Input'

const Address = ({ setForm, formData, navigation }: any) => {
  const { address, city, postcode } = formData

  const { previous, next } = navigation

  return (
    <div className="form">
      <Heading level={4}>Delivery details</Heading>
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
        <Button clear onClick={previous}>Previous</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}

export default Address
