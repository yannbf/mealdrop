import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DefaultTemplate } from '../../templates/PageTemplate'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?page-id=135%3A257&node-id=135%3A258&viewport=241%2C48%2C0.2&scaling=scale-down-width&starting-point-node-id=135%3A258',
    },
  },
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => (
  <DefaultTemplate>
    <HomePage />
  </DefaultTemplate>
)

export const Default = Template.bind({})
