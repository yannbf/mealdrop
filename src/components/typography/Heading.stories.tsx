import preview from '#.storybook/preview'

import { Heading } from './Heading'

const meta = preview.meta({
  title: 'Components/Typography/Heading',
  component: Heading,
  argTypes: {
    children: { controls: 'text' },
    level: { table: { disable: true } },
  },
})

export const Default = meta.story({
  args: {
    children: '',
  },
  render: ({ children }) => (
    <div>
      <Heading>{children || 'Heading 1'}</Heading>
      <Heading level={2}>{children || 'Heading 2'}</Heading>
      <Heading level={3}>{children || 'Heading 3'}</Heading>
      <Heading level={4}>{children || 'Heading 4'}</Heading>
    </div>
  ),
})
