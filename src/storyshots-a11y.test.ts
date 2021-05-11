import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import initStoryshots from '@storybook/addon-storyshots'

expect.extend(toHaveNoViolations)

/**
 * Storyshots provides a way to run automated tests for every story that matches the criteria:
 * glob defined in main.js + storyNameRegex
 *
 * With it you can do automated a11y, snapshots, imageSnapshots, or whatever custom test you want.
 */
initStoryshots({
  suite: 'A11y checks',
  test: async ({ story, context }) => {
    const component = story.render(context)
    const { container } = render(component)
    expect(await axe(container)).toHaveNoViolations()
  },
  storyKindRegex: /Components/,
  storyNameRegex: 'Default',
})
