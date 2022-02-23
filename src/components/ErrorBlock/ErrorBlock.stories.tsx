import { ComponentStory, ComponentMeta } from '@storybook/react'

import sushi from '../../assets/images/sushi.svg'
import { AnimatedIllustration } from '../AnimatedIllustration'

import { ErrorBlock } from './ErrorBlock'

export default {
  title: 'Components/ErrorBlock',
  component: ErrorBlock,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ErrorBlock>

const Template: ComponentStory<typeof ErrorBlock> = (args) => <ErrorBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'This is not the food you’re looking for.',
  body: 'There seems that there are no restaurants in this category yet. Try to come back later?',
  image: <img alt="no restaurants found" src={sushi} />,
  buttonText: 'See all restaurants',
}

// export const Error500 = Template.bind({})
// Error500.args = {
//   title: 'Something went wrong!',
//   body: 'Our bad, something went wrong on our side.',
//   image: <AnimatedIllustration animation="Error" />,
//   buttonText: 'Try again',
// }

export const Error404 = Template.bind({})
Error404.args = {
  title: "We can't find this page",
  body: 'This page doesn’t exist, keep looking.',
  image: <AnimatedIllustration animation="NotFound" />,
  buttonText: 'Home',
}
