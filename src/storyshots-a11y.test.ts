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
    // Story component is rendered and you can test anything you'd like
    const { container } = render(component)
    expect(await axe(container)).toHaveNoViolations()
  },
  // Storyshots has filters and you can set to run tests in whatever scope you'd like
  // In this case, we are running a11y tests only in stories with Components in the title, and with name "Default"
  storyKindRegex: /^Components/,
  storyNameRegex: 'Default',
})
