import React from 'react'

import ItemForm from './ItemForm'
import { Button } from '../Button'

const Address = ({ setForm, formData, navigation }: any) => {
  const { address, city, zip } = formData

  const { previous, next } = navigation

  return (
    <div className="form">
      <h3>Tell us where you are</h3>
      <ItemForm
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
      />
      <ItemForm label="City" name="city" value={city} onChange={setForm} />
      <ItemForm label="Zip" name="zip" value={zip} onChange={setForm} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button label="Previous" onClick={previous} />
        <Button label="Next" onClick={next} />
      </div>
    </div>
  )
}

export default Address
