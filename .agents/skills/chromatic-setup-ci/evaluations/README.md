# Chromatic CI Setup Evaluations

These scenarios verify that the chromatic-setup-ci skill:
- does not add a `chromatic` script or devDependency when using GitHub Actions
- asks which CI provider to use rather than assuming GitHub Actions
- keeps generated configs minimal (no TurboSnap, Playwright, or monorepo flags unless asked)
