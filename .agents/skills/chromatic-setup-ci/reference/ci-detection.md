# CI Provider Detection

Check for these config files to identify the CI provider. Use `Glob` to search for their existence.

## Detection patterns

| CI Provider | Config file(s) |
|---|---|
| GitHub Actions | `.github/workflows/*.yml` or `.github/workflows/*.yaml` |
| GitLab Pipelines | `.gitlab-ci.yml` |
| Bitbucket Pipelines | `bitbucket-pipelines.yml` |
| CircleCI | `.circleci/config.yml` |
| Jenkins | `Jenkinsfile` |
| Azure Pipelines | `azure-pipelines.yml` |
| Travis CI | `.travis.yml` |
| Semaphore | `.semaphore/semaphore.yml` |

## Detection logic

1. Run Glob for all patterns above.
2. **One match** → use that provider.
3. **Multiple matches** → tell the user what was found, ask which one to configure.
4. **No matches** → ask: "Which CI provider are you using?"

## GitHub Actions special case

GitHub Actions workflows live in `.github/workflows/` — there may be multiple files. Check if a `chromatic.yml` already exists there. If it does, read it first and update it rather than creating a new one.

If multiple workflow files exist but none is named `chromatic.yml`, create a new `.github/workflows/chromatic.yml` rather than editing an existing unrelated workflow.

## No config found

If the user says they don't have a CI provider yet, recommend GitHub Actions as the easiest starting point and generate `.github/workflows/chromatic.yml`.
