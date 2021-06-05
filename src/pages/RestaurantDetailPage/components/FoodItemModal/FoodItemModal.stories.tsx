import { Story, Meta } from '@storybook/react'
import { useState } from 'react';
import { Button } from '../../../../components/Button'

import { FoodItemModal } from './FoodItemModal'

export default {
  title: 'Pages/RestaurantDetailPage/Components/FoodItemModal',
  component: FoodItemModal,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 600 },
  },
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

  const [item, setItem] = useState<any>(itemMock)
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
