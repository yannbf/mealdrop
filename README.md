## MealDrop

Storybook is an open-source tool that helps you develop UI components in isolation. It runs in your codebase, but separately from your application. It's like a sandbox, allowing you to not get distracted by incomplete APIs, flaky data, and other external dependencies. It integrates with frameworks like React, Vue, Svelte, Angular, and many others!

With Storybook, you can ease the development of a design system and share a common language with Designers. QA's can get an overview and test functionalities in isolation. Stakeholders can use it for demo purposes. Overall, Storybook helps connect all of these people, greatly improving collaboration!

This is MealDrop, a real-world like project made by [Yann Braga](https://twitter.com/yannbf) (from the Storybook team). It's a food delivery app built from scratch with:

- Modern React with [Typescript](https://www.typescriptlang.org/) and hooks
- Styles with [Styled components](http://styled-components.com/)
- State management [Redux](https://redux.js.org/) with [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- Tests with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Routing with [React router](https://reactrouter.com/)
- Component explorer [Storybook](https://storybook.js.org/)

Every component of the app is developed and documented in Storybook, and the designs are all in Figma.

[![MealDrop Demo](https://img.shields.io/badge/MealDrop-Live%20demo-green?style=for-the-badge&logo=vercel)](http://mealdrop.vercel.app/)
[![MealDrop Storybook](https://img.shields.io/badge/MealDrop-Storybook-ff4785?style=for-the-badge&logo=storybook)](http://mealdrop.vercel.app/storybook)
[![MealDrop Designs](https://img.shields.io/badge/MealDrop-Designs-eeeeee?style=for-the-badge&logo=figma)](https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop)

![](./.github/media/application-example.png)

You can check this repo as a reference for:

- The core concepts of Storybook
- Development workflow with Storybook
- Using the full potential of Storybook, adding components, features and pages
- Testing strategies with Storybook
- Building UI faster
- Mental models for component development
- Tools to improve designer-developer collaboration
- Best practices

## What the demo showcases

- <a href="https://mealdrop.vercel.app/storybook/?path=/docs/design-system-colors--docs">Documenting design tokens</a>
- <a href="https://mealdrop.vercel.app/storybook/?path=/docs/components-button--docs">Documenting components</a>
- <a href="https://mealdrop.vercel.app/storybook/?path=/story/pages-categorydetailpage--default&addonPanel=storybook/a11y/panel&panel=right">Accessibility testing</a>
- <a href="https://mealdrop.vercel.app/storybook/?path=/story/pages-restaurantdetailpage--not-found&panel=right">Network mocking</a>
- Rendering components in isolation, from the <a href="https://mealdrop.vercel.app/storybook/?path=/docs/components-button--default&panel=right">simplest</a> to the <a href="https://mealdrop.vercel.app/storybook/?path=/story/userflows-app--home&panel=right">most complex ones</a>
  ![](./.github/media/restaurant-card-stories.gif)
- <a href="https://mealdrop.vercel.app/storybook/?path=/story/userflows-app--to-success-page&addonPanel=storybook/interactions/panel&panel=right">Interaction testing</a>
  ![](./.github/media/interaction-tests.gif)
- <a href="https://mealdrop.vercel.app/storybook/?path=/story/components-button--default&addonPanel=STORYBOOK_ADDON_DESIGNS/panel&panel=right">Design integration (Figma)</a>
  ![](./.github/media/figma-connect.png)
- <a href="https://mealdrop.vercel.app/storybook/?path=/story/components-button--default&globals=theme:dark">Theme switching</a>
  ![](./.github/media/theme-toolbar.gif)
- And much more!
