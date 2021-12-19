import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { PageTemplate } from '../../templates/PageTemplate'
import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'
import { cartItems } from '../../stub/cart-items'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A258',
    },
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
    },
  },
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => (
  <PageTemplate>
    <HomePage />
  </PageTemplate>
)

export const Default = Template.bind({})

export const WithItemsInTheCart = Template.bind({})
WithItemsInTheCart.parameters = {
  store: {
    initialState: { cart: { items: cartItems } },
  },
}
