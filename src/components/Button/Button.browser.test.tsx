import { test, expect, vi } from 'vitest'
import { page } from 'vitest/browser'
import { render } from '../../test-utils'
import { Button } from './Button'

test('renders the Button component', async () => {
  await render(<Button>Submit</Button>)

  await expect.element(page.getByRole('button', { name: 'Submit' })).toBeVisible()
})

test('calls handler', async () => {
  const onClick = vi.fn()
  await render(<Button onClick={onClick}>Submit</Button>)

  await page.getByRole('button', { name: 'Submit' }).click()

  expect(onClick).toHaveBeenCalledOnce()
})

test('hover', async () => {
  await render(<Button>Submit</Button>)

  await page.getByRole('button', { name: 'Submit' }).hover()
})
