import preview from '#.storybook/preview'

import { Breadcrumb } from './Breadcrumb'

const meta = preview.meta({
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
})

export const SingleItem = meta.story({
  args: {
    items: [{ label: 'categories' }],
  },
})

export const MultipleItems = meta.story({
  args: {
    items: [
      { label: 'home', path: '/' },
      { label: 'categories', path: '/categories' },
      { label: 'sushi' },
    ],
  },
})
