import { Story, Meta } from '@storybook/react'

import sushi from '../../assets/images/sushi.svg'

import {
  ErrorBlock,
  ErrorSectionProps,
} from './ErrorBlock'

export default {
  title: 'Components/ErrorSection',
  component: ErrorBlock,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story<ErrorSectionProps> = (args) => (
  <ErrorBlock {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'This is not the food you’re looking for.',
  body: 'There seems that there are no restaurants in this category yet. Try to come back later?',
  image: <img alt="no restaurants found" src={sushi} />,
  buttonText: 'See all restaurants'
}