import preview from '#.storybook/preview'
import { expect } from 'storybook/test'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

const meta = preview.meta({
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1091-2986&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
})

export const Default = meta.story({
  args: {
    ...restaurants[0],
    name: 'Burger Kingdom',
  },
})

export const New = meta.story({
  args: {
    ...Default.input.args,
    isNew: true,
  },
})

export const Closed = meta.story({
  args: {
    ...Default.input.args,
    isClosed: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('This restaurant is closed.')).toBeInTheDocument()
  },
})

export const Loading = meta.story({
  args: {
    ...Default.input.args,
    isLoading: true,
  },
})
