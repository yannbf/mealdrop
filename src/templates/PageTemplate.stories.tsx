import * as React from 'react'
import { Story, Meta } from '@storybook/react'

import { DefaultTemplate, SimpleTemplate, StickyHeaderTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

export const Default: Story = () => (
  <DefaultTemplate>
    <DummyComponent>Default template with scrollable header and navigation items</DummyComponent>
  </DefaultTemplate>
)

export const Simple: Story = () => (
  <SimpleTemplate>
    <DummyComponent>Simple template with scrollable header and no navigation</DummyComponent>
  </SimpleTemplate>
)

export const StickyHeader: Story = () => (
  <StickyHeaderTemplate>
    <DummyComponent>
      Template with sticky header on desktop and navigation items. Try scrolling
    </DummyComponent>
  </StickyHeaderTemplate>
)
