import initStoryshots from '@storybook/addon-storyshots'

// This will automate snapshot testing for all stories
initStoryshots({
  storyKindRegex: /^Components/,
  storyNameRegex: 'Default',
})
