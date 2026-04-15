# Chromatic Themes Evaluations

These scenarios verify that the chromatic-themes skill:
- asks which theme library the project uses before choosing a decorator
- uses `withThemeByClassName` for class-based libraries (Tailwind, plain CSS)
- uses `withThemeByDataAttribute` for attribute-based libraries (Bootstrap)
- fetches the library-specific getting-started guide for custom decorator setups (MUI, styled-components, Emotion)
- merges theme modes into existing `allModes` rather than replacing them
- does not suggest viewport or locale modes when the user only asks about themes
