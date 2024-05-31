import { StoryFn, Meta } from '@storybook/react'

import { allModes } from '../../../.storybook/modes'

import { Header } from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1690-4054&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
    chromatic: {
      modes: {
        xs: allModes.xs,
        s: allModes.s,
        m: allModes.m,
        l: allModes.l,
      },
    },
  },
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = (args) => (
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
