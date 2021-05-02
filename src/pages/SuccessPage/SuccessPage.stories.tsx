import { Story, Meta } from '@storybook/react'

import { SuccessPage } from './SuccessPage'

export default {
  title: 'Pages/SuccessPage',
  component: SuccessPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'experimental-figspec',
      url:
        'https://www.figma.com/file/XW4Bcjmj3JOILjKmZjjdQd/Foodenters?node-id=426%3A3444',
      accessToken: process.env.FIGMA_ACCESS_TOKEN,
    },
  },
} as Meta

const Template: Story = (args) => <SuccessPage {...args} />

export const Default = Template.bind({})
Default.parameters = {
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
    }
  }
}
