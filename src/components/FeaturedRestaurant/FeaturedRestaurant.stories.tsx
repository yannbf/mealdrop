import type { Meta, StoryObj } from '@storybook/react-vite'

import { restaurants } from '../../stub/restaurants'

import { FeaturedRestaurant } from './FeaturedRestaurant'

const meta = {
  title: 'Components/FeaturedRestaurant',
  component: FeaturedRestaurant,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FeaturedRestaurant>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...restaurants[0],
    name: 'Burger Kingdom',
    quoteText: 'The burgers here are absolutely incredible! Best I have ever had.',
    quoteAuthor: 'Sarah Johnson',
    quoteLocation: 'Amsterdam',
  },
}

export const New: Story = {
  args: {
    ...Default.args,
    isNew: true,
    quoteText: 'Finally, a new spot with amazing food and great atmosphere!',
    quoteAuthor: 'Michael Chen',
    quoteLocation: 'Rotterdam',
  },
}

export const LongQuote: Story = {
  args: {
    ...Default.args,
    quoteText:
      'I have been coming to this restaurant for years and the quality has never disappointed. The atmosphere is wonderful, the staff is friendly, and the food is always fresh and delicious.',
    quoteAuthor: 'Emma Davis',
    quoteLocation: 'Utrecht',
  },
}

export const Closed: Story = {
  args: {
    ...Default.args,
    isClosed: true,
    quoteText: 'This place was amazing when it was open. Will miss it dearly.',
    quoteAuthor: 'John Smith',
    quoteLocation: 'Den Haag',
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}
