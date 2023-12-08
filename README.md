## Chromatic E2E Visual Tests Demo (with Playwright)

Showcases Chromatic's [E2E Visual Tests](https://www.chromatic.com/docs/e2e-visual-tests/) in a real-world setting. We use the [MealDrop](https://mealdrop.vercel.app/) app as an example of how to catch visual regressions as part of our E2E testing with [Playwright](https://playwright.dev/).

## Setup
1. Clone the repo
2. Run `yarn` to install dependencies
3. Run `yarn start` to run the site locally (which we test against)
4. Run `yarn playwright test` to run the Playwright tests (which we automatically snapshot)
5. (Optional) Run `yarn archive-storybook` to see the storybook created for the tests (e.g. to visually see what we snapshotted)
6. Run `npx chromatic@latest --build-script-name=build-archive-storybook -t=<project-token>` to make a Chromatic build
7. Inspect the build in [Chromatic](https://www.chromatic.com/builds?appId=65727c8333f449f3cf7b5965)
