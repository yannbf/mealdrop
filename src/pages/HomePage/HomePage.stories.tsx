import preview from '#.storybook/preview'
import { http, HttpResponse } from 'msw'

import { BASE_URL } from '../../api'
import { restaurantsCompleteData } from '../../stub/restaurants'

import { HomePage } from './HomePage'

const meta = preview.meta({
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A258',
    },
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurantsCompleteData))],
    },
  },
})

export const Default = meta.story({})
