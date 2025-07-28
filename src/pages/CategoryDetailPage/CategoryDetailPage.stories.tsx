import type { Meta, StoryObj } from '@storybook/react-vite'
import { http, delay, HttpResponse } from 'msw'

import { restaurants } from '../../stub/restaurants'
import { BASE_URL } from '../../api'
import { withDeeplink } from '../../../.storybook/withDeeplink'

import { CategoryDetailPage } from './CategoryDetailPage'

const meta = {
  title: 'Pages/CategoryDetailPage',
  component: CategoryDetailPage,
  parameters: {
    layout: 'fullscreen',
    deeplink: { route: '/categories/burgers', path: '/categories/:id' },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=206-573&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
  decorators: [withDeeplink],
} satisfies Meta<typeof CategoryDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json([restaurants[0]]))],
    },
  },
}

export const Loading: Story = {
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

export const Missing: Story = {
  parameters: {
    deeplink: { route: '/categories/wrong', path: '/categories/:id' },
    msw: {
      handlers: [http.get(BASE_URL, () => HttpResponse.json([]))],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=426-1402&mode=design&t=PGeoMU7t8HOFToQL-4',
    },
  },
}
