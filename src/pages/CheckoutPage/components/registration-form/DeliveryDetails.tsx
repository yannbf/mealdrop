import { useNavigate } from 'react-router-dom'

import { saveOrderAction } from '../../../../app-state/order'
import { useAppDispatch, useAppSelector } from '../../../../app-state'
import { clearCartAction, selectCartItems } from '../../../../app-state/cart'
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
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItems)

  const { address, city, postcode } = formData

  const { previous } = navigation

  const onCompleteOrder = () => {
    dispatch(saveOrderAction(cartItems))
    dispatch(clearCartAction())
    navigate('/success')
  }

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
      <Input label="City" placeholder="Amsterdam" name="city" value={city} onChange={setForm} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button clear onClick={previous}>
          Previous
        </Button>
        <Button onClick={onCompleteOrder}>Complete order</Button>
      </div>
    </div>
  )
}
