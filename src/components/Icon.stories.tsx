import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Icon } from './Icon'
import styled, { css } from 'styled-components'
import { Body } from './typography/Body'

const icons = [
  'arrow-right',
  'arrow-left',
  'cross',
  'cart',
  'minus',
  'plus',
  'moon',
  'sun',
]

const IconContainer = styled.div(
  ({ theme: { color } }) => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    div {
      border: 1px solid ${color.primaryText};
      border-radius: 8px;
      padding: 2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        margin-top: 0.5rem;
      }
    }
  `
)

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    size: {
      control: {
        type: 'range',
      },
    },
  },
} as Meta

const Template: Story = (args) => <Icon {...args} />


export const AllIcons = () => (
  <>
    <IconContainer>
      {icons.map((icon) => (
        <div>
          <Icon name={icon} size={24} />
          <Body type="span" size="XS">{icon}</Body>
        </div>
      ))}
    </IconContainer>
  </>
)

export const Playground = Template.bind({})
Playground.args = {
  name: 'cart',
  size: 24,
}
