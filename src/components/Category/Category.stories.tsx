import type { StoryObj, Meta } from '@storybook/react-vite'

import { Category } from './Category'

const meta = {
  title: 'Components/Category',
  component: Category,
  args: {
    title: 'Pizza',
    photoUrl:
      'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550',
  },
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-3681&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} satisfies Meta<typeof Category>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rounded: Story = {
  args: {
    round: true,
  },
}
