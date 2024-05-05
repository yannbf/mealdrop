import { StoryFn, Meta } from '@storybook/react'
import { delay, HttpResponse, http } from 'msw'

import { BASE_URL } from '../../../../api'
import { restaurants } from '../../../../stub/restaurants'

import { RestaurantsSection } from './RestaurantsSection'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
} as Meta<typeof RestaurantsSection>

const Template: StoryFn<typeof RestaurantsSection> = (args) => <RestaurantsSection {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Our favorite picks',
}
Default.parameters = {
  msw: {
    handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
}
Loading.parameters = {
  msw: {
    handlers: [
      http.get(BASE_URL, async () => {
        await delay('infinite')
      }),
    ],
  },
}
