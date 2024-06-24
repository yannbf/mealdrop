import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { cartItems } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

const meta = {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageTemplate>

export default meta
type Story = StoryObj<typeof meta>

const DummyComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <div style={{ padding: 60 }}>{children}</div>
)

export const Default: Story = {
  args: {
    children: (
      <DummyComponent>Default template with scrollable header and navigation items</DummyComponent>
    ),
  },
}

export const DefaultWithItemsInTheCart: Story = {
  parameters: {
    store: {
      initialState: { cart: { items: cartItems } },
    },
  },
}

export const StickyHeader: Story = {
  args: {
    type: 'sticky-header',
    children: (
      <DummyComponent>
        Template with sticky header on desktop and navigation items. Try scrolling
      </DummyComponent>
    ),
  },
}

export const Basic: Story = {
  args: {
    type: 'basic',
    children: (
      <DummyComponent>
        Simple template with scrollable header and no navigation items
      </DummyComponent>
    ),
  },
}
