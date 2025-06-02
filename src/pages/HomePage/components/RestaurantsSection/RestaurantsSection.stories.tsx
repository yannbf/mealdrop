import preview from '#.storybook/preview'
import { delay, HttpResponse, http } from 'msw'

import { BASE_URL } from '../../../../api'
import { restaurantsCompleteData } from '../../../../stub/restaurants'

import { RestaurantsSection } from './RestaurantsSection'

const meta = preview.meta({
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
})

export const Default = meta.story({
  args: {
    title: 'Our favorite picks',
  },
  parameters: {
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurantsCompleteData))],
    },
  },
})

export const Loading = Default.extend({
  parameters: {
    msw: {
      handlers: [
        http.get(BASE_URL, async () => {
          await delay('infinite')
        }),
      ],
    },
  },
})
