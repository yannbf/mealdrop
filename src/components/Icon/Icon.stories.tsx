import preview from "../../../.storybook/preview";
import styled, { css } from 'styled-components'

import { Body } from '../typography/Body'

import { Icon } from './Icon'

const icons = ['arrow-right', 'arrow-left', 'cross', 'cart', 'minus', 'plus', 'moon', 'sun', 'star']

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

const meta = preview.meta({
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: icons,
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'range',
      },
    },
  },
})

export const AllIcons = meta.story({
  render: () => (
    <>
      <IconContainer>
        {icons.map((icon) => (
          <div key={icon}>
            <Icon name={icon} size={24} />
            <Body type="span" size="XS">
              {icon}
            </Body>
          </div>
        ))}
      </IconContainer>
    </>
  ),
})

export const Playground = meta.story({
  args: {
    name: 'cart',
    size: 24,
  },
})
