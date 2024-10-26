import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse, delay } from 'msw'
import { expect } from '@storybook/test'

import { BASE_URL } from '../../api'
import { restaurants } from '../../stub/restaurants'
import { withDeeplink } from '../../../.storybook/withDeeplink'

import { RestaurantDetailPage } from './RestaurantDetailPage'

const meta = {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  tags: ['autodocs'],
  decorators: [withDeeplink],
  parameters: {
    docs: {
      story: {
        // HEY ARTEM: This flag being false makes each story render in a separate iframe.
        // if false, they render as inline components.
        inline: false,
        iframeHeight: 400,
      }
    },
    layout: 'fullscreen',
    deeplink: {
      route: '/restaurants/1',
      path: '/restaurants/:id',
    },
  },
  render: () => {
    return (
      <>
        <RestaurantDetailPage />
        <div id="modal" />
      </>
    )
  },
} satisfies Meta<typeof RestaurantDetailPage>
export default meta

type Story = StoryObj<typeof meta>


function isolatedResolver(resolver: any) {
  return (info: any) => {
    console.log('INSIDE RESOLVER RESOLVING')
    const node = document.createElement('p')
    node.id = "MSW_DEBUG"
    node.style.fontSize = '50px'
    node.style.color = 'red'
    node.style.fontWeight = 'bold'
    node.style.zIndex = '999'
    node.innerText = info.request.referrer + '-' + location.href
    document.body.appendChild(node)
    console.log('info', { requestReferrer: info.request.referrer, href: location.href })
    if (info.request.referrer !== location.href) {
      return
    }
    return resolver(info)
  }
}

export const Success = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=169%3A510',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, isolatedResolver(() => {
          console.log('INSIDE RESOLVER CB')
          return HttpResponse.json(restaurants[0])
        })),
      ],
    },
  },
  play: async ({ canvas }) => {
    const item = await canvas.findByText(/Burger Kingdom/i)
    await expect(item).toBeInTheDocument()
  },
} satisfies Story

export const Loading: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=2152%3A3158',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, isolatedResolver(async () => {
          await delay('infinite')
        })),
      ],
    },
  },
  play: async ({ canvas }) => {
    const item = await canvas.findByText(/Looking for some food.../i)
    await expect(item).toBeInTheDocument()
  },
}

export const NotFound: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1097%3A3785',
    },
    msw: {
      handlers: {
        error: http.get(BASE_URL, isolatedResolver(() => {
          return HttpResponse.json(null, { status: 404 })
        })),
      },
    },
  },
  play: async ({ canvas }) => {
    const item = await canvas.findByText(/We can't find this page/i)
    await expect(item).toBeInTheDocument()
  },
}

export const Error: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1091%3A4537',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, isolatedResolver(() => {
          return HttpResponse.json({}, { status: 500 })
        })),
      ],
    },
  },
  play: async ({ canvas, step }) => {
    await step('Name of step', async () => {
      const item = await canvas.findByText(/Something went wrong!/i)
      await expect(item).toBeInTheDocument()
    })
  },
}
