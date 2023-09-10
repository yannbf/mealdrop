import { vi, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './Button.stories'

const { Default, Disabled } = composeStories(stories)
test('renders button with custom children', async () => {
  const { container } = render(<Default />)
  expect(screen.getByText(/Button/i)).toBeInTheDocument()
  // @ts-ignore TODO fix Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>
  expect(await axe(container)).toHaveNoViolations()
})

test('onclick handler is called', async () => {
  const onClickSpy = vi.fn()
  render(<Default onClick={onClickSpy} />)
  const buttonElement = screen.getByRole('button')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

test('onclick handler is not called when disabled', async () => {
  const onClickSpy = vi.fn()
  render(<Disabled onClick={onClickSpy} />)
  screen.getByRole('button').click()
  expect(onClickSpy).not.toHaveBeenCalled()
})
