import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { cartItems } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof PageTemplate>

const DummyComponent: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <div style={{ padding: 60 }}>{children}</div>
)

const Template: StoryFn<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <DummyComponent>Default template with scrollable header and navigation items</DummyComponent>
  ),
}

export const DefaultWithItemsInTheCart = Template.bind({})
DefaultWithItemsInTheCart.parameters = {
  store: {
    initialState: { cart: { items: cartItems } },
  },
}

export const StickyHeader = Template.bind({})
StickyHeader.args = {
  type: 'sticky-header',
  children: (
    <DummyComponent>
      Template with sticky header on desktop and navigation items. Try scrolling
    </DummyComponent>
  ),
}

export const Basic = Template.bind({})
Basic.args = {
  type: 'basic',
  children: (
    <DummyComponent>Simple template with scrollable header and no navigation items</DummyComponent>
  ),
}
