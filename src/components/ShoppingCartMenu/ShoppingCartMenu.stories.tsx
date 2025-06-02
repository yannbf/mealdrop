import preview from '#.storybook/preview'
import { useEffect, useState } from 'react'
import { fn } from 'storybook/test'

import { cartItems } from '../../stub/cart-items'
import { Button } from '../Button'
import { Body } from '../typography'

import { ShoppingCartMenu } from './ShoppingCartMenu'

const meta = preview.meta({
  title: 'Components/ShoppingCartMenu',
  component: ShoppingCartMenu,
  parameters: {
    // This makes it so that the modal is loaded inside of an iframe in docs mode.
    // If it's not rendered in an iframe, the modal is going to open on top of Storybook itself!
    docs: {
      story: {
        inline: false,
        iframeHeight: '600px',
      },
    },
  },
  args: {
    isOpen: true,
    cartItems: cartItems,
    totalPrice: 1200,
    /*
    The following lines emulate the event handlers that would be passed to the component
    Read more about the `fn` utility function at
    https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
    */
    onClose: fn(),
    onItemChange: fn(),
  },
})

export const Empty = meta.story({
  args: {
    cartItems: [],
    totalPrice: 0,
  },
})

export const WithItems = meta.story()

export const Mobile = meta.story({
  globals: {
    viewport: {
      value: 'iphonex',
    },
  },
})

export const Playground = meta.story({
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const openShoppingCartMenu = () => setIsOpen(true)
    const closeShoppingCartMenu = () => setIsOpen(false)

    useEffect(() => {
      setIsOpen(true)
    }, [])

    return (
      <>
        <Body>Press ESC to close the ShoppingCartMenu or click on the close icon!</Body>
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
  },
})
