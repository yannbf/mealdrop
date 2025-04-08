import type { Meta, StoryObj } from '@storybook/react-vite'
import { delay, HttpResponse, http } from 'msw'

import { BASE_URL } from '../../../../api'
import { restaurantsCompleteData } from '../../../../stub/restaurants'

import { RestaurantsSection } from './RestaurantsSection'

const meta = {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
} satisfies Meta<typeof RestaurantsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Our favorite picks',
  },
  parameters: {
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurantsCompleteData))],
    },
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    msw: {
      handlers: [
        http.get(BASE_URL, async () => {
          await delay('infinite')
        }),
      ],
    },
  },
}
