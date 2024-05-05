import { StoryFn, Meta } from '@storybook/react'
import { http, HttpResponse } from 'msw'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A258',
    },
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json(restaurants))],
    },
  },
} as Meta<typeof HomePage>

const Template: StoryFn<typeof HomePage> = () => <HomePage />

export const Default = Template.bind({})
