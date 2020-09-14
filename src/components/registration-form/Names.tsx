import React from 'react'

import ItemForm from './ItemForm'
import { Button } from '../Button'

const Names = ({ setForm, formData, navigation }: any) => {
  const { firstName, lastName, nickName } = formData

  const { next } = navigation

  return (
    <div className="form">
      <h2>Tell us more about you</h2>
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button label="Next" onClick={next} />
      </div>
    </div>
  )
}

export default Names
