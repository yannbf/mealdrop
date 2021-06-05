import { useHistory } from 'react-router-dom'

import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/forms/Input'

type DeliveryDetailsProps = {
  setForm: () => {}
  formData: {
    address: string
    city: string
    postcode: string
  }
  navigation: any
}

export const DeliveryDetails = ({ setForm, formData, navigation }: DeliveryDetailsProps) => {
  const history = useHistory()
  const { address, city, postcode } = formData

  const { previous } = navigation

  return (
    <div className="form">
      <Input
        label="Streetname and housenumber"
        placeholder="Some street, 13"
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
          justifyContent: 'space-between',
        }}
      >
        <Button clear onClick={previous}>
          Previous
        </Button>
        <Button onClick={() => history.push('/success')}>Complete</Button>
      </div>
    </div>
  )
}
