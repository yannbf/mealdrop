import { StoryFn, Meta } from '@storybook/react'

import { PageSection } from './PageSection'

export default {
  title: 'Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof PageSection>

const Template: StoryFn<typeof PageSection> = (args) => <PageSection {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Asian',
  children: <h1>Hello Dummy Content</h1>,
}

export const WithButtons = Template.bind({})
WithButtons.args = {
  ...Default.args,
  title: 'Asian',
}
