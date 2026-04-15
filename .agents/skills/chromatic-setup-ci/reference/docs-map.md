# Chromatic CI Docs Map

Fetch the relevant URL with WebFetch when you need provider-specific configuration details. These are Chromatic's official LLM-friendly docs — always fetch at runtime rather than relying on cached knowledge.

## CI overview

| Topic | URL |
|---|---|
| CI overview (all providers) | https://www.chromatic.com/docs/llms/ci.txt |

## Per-provider docs

| CI Provider | URL |
|---|---|
| GitHub Actions | https://www.chromatic.com/docs/llms/github-actions.txt |
| GitLab Pipelines | https://www.chromatic.com/docs/llms/gitlab.txt |
| Bitbucket Pipelines | https://www.chromatic.com/docs/llms/bitbucket-pipelines.txt |
| CircleCI | https://www.chromatic.com/docs/llms/circleci.txt |
| Jenkins | https://www.chromatic.com/docs/llms/jenkins.txt |
| Azure Pipelines | https://www.chromatic.com/docs/llms/azure-pipelines.txt |
| Travis CI | https://www.chromatic.com/docs/llms/travisci.txt |
| Semaphore | https://www.chromatic.com/docs/llms/semaphore.txt |
| Custom / other CI | https://www.chromatic.com/docs/llms/custom-ci-provider.txt |

## Notes

- **GitHub Actions**: The `chromaui/action` handles Chromatic internally — do not add a `chromatic` script or devDependency to `package.json`.
- **All other providers**: `chromatic` must be in `devDependencies` and a `chromatic` script added to `package.json`.
- Always fetch the provider doc to get current config examples — don't rely on remembered templates.
