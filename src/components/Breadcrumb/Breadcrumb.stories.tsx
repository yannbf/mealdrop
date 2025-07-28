import { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const SingleItem: Story = {
  args: {
    items: [{ label: 'categories' }],
  },
}

export const MultipleItems: Story = {
  args: {
    items: [
      { label: 'home', path: '/' },
      { label: 'categories', path: '/categories' },
      { label: 'sushi' },
    ],
  },
}
