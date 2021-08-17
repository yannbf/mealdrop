import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <div style={{ position: 'relative', height: '100vh' }}>
    <Header {...args} />
  </div>
)

export const Default = Template.bind({})

export const WithCartData = Template.bind({})
WithCartData.parameters = {
  store: {
    initialState: {
      cart: {
        visible: false,
        items: [
          {
            id: 2,
            name: 'Fries',
            description: 'Fried french fries',
            price: 2.5,
            quantity: 2,
          },
          {
            id: 1,
            name: 'Cheeseburger',
            description: 'Nice grilled burger with cheese',
            price: 8.5,
            quantity: 1,
          },
        ],
      },
    },
  },
}
