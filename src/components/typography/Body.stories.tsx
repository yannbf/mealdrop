import preview from "../../../.storybook/preview";

import { Body } from './Body'

const meta = preview.meta({
  title: 'Components/Typography/Body',
  component: Body,
  argTypes: {
    children: { controls: 'text' },
    size: { table: { disable: true } },
  },
})

export const Default = meta.story({
  args: {
    children: '',
  },
  render: ({ children }) => (
    <div>
      <Body>{children || 'Body'}</Body>
      <Body size="S">{children || 'Body S'}</Body>
      <Body size="XS">{children || 'Body XS'}</Body>
      <Body size="XXS">{children || 'Body XXS'}</Body>
    </div>
  ),
})
