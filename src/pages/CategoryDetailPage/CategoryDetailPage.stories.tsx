import { ComponentStory, ComponentMeta } from '@storybook/react'
import { rest } from 'msw'

import { restaurants } from '../../stub/restaurants'
import { DefaultTemplate } from '../../templates/PageTemplate'
import { BASE_URL } from '../../api'

import { CategoryDetailPage } from './CategoryDetailPage'

export default {
  title: 'Pages/CategoryDetailPage',
  component: CategoryDetailPage,
  parameters: {
    layout: 'fullscreen',
    deeplink: { route: '/categories/burgers', path: '/categories/:id' },
  },
} as ComponentMeta<typeof CategoryDetailPage>

const Template: ComponentStory<typeof CategoryDetailPage> = () => (
  <DefaultTemplate>
    <CategoryDetailPage />
  </DefaultTemplate>
)

export const Default = Template.bind({})
Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json([restaurants[0]])))],
  },
}

export const Loading = Template.bind({})
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}

export const Missing = Template.bind({})
Missing.parameters = {
  deeplink: { route: '/categories/wrong', path: '/categories/:id' },
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json([])))],
  },
}
