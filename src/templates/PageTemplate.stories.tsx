import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>

const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: (
    <DummyComponent>Default template with scrollable header and navigation items</DummyComponent>
  ),
}

export const Basic = Template.bind({})
Basic.args = {
  type: 'basic',
  children: (
    <DummyComponent>Simple template with scrollable header and no navigation items</DummyComponent>
  ),
}

export const StickyHeader = Template.bind({})
StickyHeader.args = {
  type: 'sticky-header',
  children: (
    <DummyComponent>
      Template with sticky header on desktop and navigation items. Try scrolling
    </DummyComponent>
  ),
}
