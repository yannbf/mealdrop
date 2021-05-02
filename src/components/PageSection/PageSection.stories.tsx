import { Story, Meta } from '@storybook/react'

import { PageSection, PageSectionProps } from './PageSection'

export default {
  title: 'Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Basic: Story<PageSectionProps> = (args) => <PageSection {...args} />

export const Default = Basic.bind({})
Default.args = {
  title: 'Asian',
  children: <h1>Hello Dummy Content Baby</h1>,
}

export const WithButtons = Basic.bind({})
WithButtons.args = {
  ...Default.args,
  title: 'Asian',
}
