import preview from '#.storybook/preview'

import { PageSection } from './PageSection'

const meta = preview.meta({
  title: 'Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
})

export const Default = meta.story({
  args: {
    title: 'Asian',
    children: <h1>Hello Dummy Content</h1>,
  },
})

export const WithButtons = meta.story({
  args: {
    ...Default.input.args,
    title: 'Asian',
  },
})
