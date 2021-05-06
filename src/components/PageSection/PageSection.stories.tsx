import { Story, Meta } from '@storybook/react'

import { PageSection, PageSectionProps } from './PageSection'

export default {
  title: 'Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story<PageSectionProps> = (args) => <PageSection {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Asian',
  children: <h1>Hello Dummy Content Baby</h1>,
}

export const WithButtons = Template.bind({})
WithButtons.args = {
  ...Default.args,
  title: 'Asian',
}
