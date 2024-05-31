import { StoryObj, Meta } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'
import { allModes } from '../../../.storybook/modes'

import { RestaurantCard } from './RestaurantCard'

const meta = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/JHymAhlkm3qUEjy360dL8k/Mealdrop-for-demo?type=design&node-id=1091-2986&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
    chromatic: {
      modes: {
        light: allModes.light,
        dark: allModes.dark,
      },
    },
  },
} satisfies Meta<typeof RestaurantCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...restaurants[0],
    name: 'Burger Kingdom',
  },
}

export const New: Story = {
  args: {
    ...Default.args,
    isNew: true,
  },
}

export const Closed: Story = {
  args: {
    ...Default.args,
    isClosed: true,
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}
