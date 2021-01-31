import { Story, Meta } from '@storybook/react'
import React, { useState } from 'react'
import { cartItems } from '../stub/cart-items'
import { Button } from './Button'

import { ShoppingCartMenu, ShoppingCartMenuProps } from './ShoppingCartMenu'

export default {
  title: 'Features/ShoppingCartMenu',
  component: ShoppingCartMenu,
} as Meta

const Template: Story<ShoppingCartMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openShoppingCartMenu = () => setIsOpen(true)
  const closeShoppingCartMenu = () => setIsOpen(false)

  React.useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <p>Press ESC to close the ShoppingCartMenu or click on the close icon!</p>
      <Button onClick={openShoppingCartMenu}>Open ShoppingCartMenu</Button>
      <ShoppingCartMenu
        isOpen={isOpen}
        cartItems={cartItems}
        totalPrice={1200}
        onItemChange={() => {}}
        onClose={() => {
          closeShoppingCartMenu()
        }}
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
