import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from '../Button'

import { FoodItemModal } from './FoodItemModal'

export default {
  title: 'Overlays/FoodItemModal',
  component: FoodItemModal,
  decorators: [
    (StoryFn: Story) => (
      <>
        <div id="modal" />
        <StoryFn />
      </>
    ),
  ],
} as Meta

const Template: Story = () => {
  const itemMock = {
    name: 'Dish.name',
    description: 'Juicy dish with extra mayonaise',
    price: 12,
  }

  const [item, setItem] = useState<any>(undefined)
  const openModal = () => setItem(itemMock)
  const closeModal = () => setItem(undefined)

  return (
    <>
      <p>Press ESC to close modal or click on the close icon!</p>
      <Button onClick={openModal}>Open modal</Button>
      <FoodItemModal
        item={item}
        cartItems={[item]}
        onClose={closeModal}
        onItemSave={() => {}}
        onItemRemove={() => {}}
      />
    </>
  )
}

export const Desktop = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}
