import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Button.stories'

const { Default, Disabled } = composeStories(stories)

test('renders button with custom children', () => {
  render(<Default />)
  expect(screen.getByText(/Button/i)).toBeInTheDocument()
})

test('onclick handler is called', async () => {
  const onClickSpy = jest.fn()
  render(<Default onClick={onClickSpy} />)
  const buttonElement = screen.getByRole('button')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

test('onclick handler is not called when disabled', async () => {
  const onClickSpy = jest.fn()
  render(<Disabled onClick={onClickSpy} />)
  screen.getByRole('button').click()
  expect(onClickSpy).not.toHaveBeenCalled()
})
