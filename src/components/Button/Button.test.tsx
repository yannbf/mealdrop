import { vi, expect, test } from 'vitest'
import { axe } from 'vitest-axe'
import { render, screen } from '@testing-library/react'

import { Default, Disabled } from './Button.stories'

test('renders button with custom children', async () => {
  await Default.run()
  expect(screen.getByText(/Button/i)).toBeInTheDocument()
  // @ts-expect-error TODO fix Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>
  expect(await axe(document.body.firstChild)).toHaveNoViolations()
})

test('onclick handler is called', async () => {
  const onClickSpy = vi.fn()
  await Default.run({ args: { onClick: onClickSpy } })
  const buttonElement = screen.getByRole('button')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

test('onclick handler is not called when disabled', async () => {
  const onClickSpy = vi.fn()
  await Disabled.run({ args: { ...Disabled.input.args, onClick: onClickSpy } })
  screen.getByRole('button').click()
  expect(onClickSpy).not.toHaveBeenCalled()
})

test('onclick handler is called', async () => {
  const onClickSpy = vi.fn()
  render(<Default.Component onClick={onClickSpy} />)
  const buttonElement = screen.getByRole('button')
  buttonElement.click()
  expect(onClickSpy).toHaveBeenCalled()
})

test('onclick handler is not called when disabled', async () => {
  const onClickSpy = vi.fn()
  render(<Disabled.Component onClick={onClickSpy} />)
  screen.getByRole('button').click()
  expect(onClickSpy).not.toHaveBeenCalled()
})
