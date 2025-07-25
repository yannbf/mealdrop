import preview from '#.storybook/preview'
import * as React from 'react'

import { cartItems } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

const meta = preview.meta({
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
})

const DummyComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <div style={{ padding: 60 }}>{children}</div>
)

export const Default = meta.story({
  args: {
    children: (
      <DummyComponent>Default template with scrollable header and navigation items</DummyComponent>
    ),
  },
})

export const DefaultWithItemsInTheCart = meta.story({
  parameters: {
    store: {
      initialState: { cart: { items: cartItems } },
    },
  },
})

export const StickyHeader = meta.story({
  args: {
    type: 'sticky-header',
    children: (
      <DummyComponent>
        Template with sticky header on desktop and navigation items. Try scrolling
      </DummyComponent>
    ),
  },
})

export const Basic = meta.story({
  args: {
    type: 'basic',
    children: (
      <DummyComponent>
        Simple template with scrollable header and no navigation items
      </DummyComponent>
    ),
  },
})
