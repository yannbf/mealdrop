import { vi, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react-vite'

import * as stories from './Button.stories'

const { Default, Disabled } = composeStories(stories)
test('renders button with custom children', async () => {
  await Default.run()
  expect(screen.getByText(/Button/i)).toBeInTheDocument()
  // @ts-expect-error TODO fix Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>
  expect(await axe(document.body.firstChild)).toHaveNoViolations()
})

test('onclick handler is called', async () => {
  const onClickSpy = vi.fn()
  await Default.run({ args: { ...Default.args, onClick: onClickSpy } })
  const buttonElement = screen.getByRole('button')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

test('onclick handler is not called when disabled', async () => {
  const onClickSpy = vi.fn()
  await Disabled.run({ args: { ...Disabled.args, onClick: onClickSpy } })
  screen.getByRole('button').click()
  expect(onClickSpy).not.toHaveBeenCalled()
})

// test('onclick handler is called', async () => {
//   const onClickSpy = vi.fn()
//   render(<Default onClick={onClickSpy} />)
//   const buttonElement = screen.getByRole('button')
//   buttonElement.click()
//   expect(onClickSpy).toHaveBeenCalled()
// })

// test('onclick handler is not called when disabled', async () => {
//   const onClickSpy = vi.fn()
//   render(<Disabled onClick={onClickSpy} />)
//   screen.getByRole('button').click()
//   expect(onClickSpy).not.toHaveBeenCalled()
// })
