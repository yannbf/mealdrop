import { expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

const meta = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1091-2986&mode=design&t=PGeoMU7t8HOFToQL-4',
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText('This restaurant is closed.')).toBeInTheDocument()
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}
