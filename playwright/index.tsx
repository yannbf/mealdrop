import { beforeMount } from '@playwright/experimental-ct-react17/hooks'

import { withThemeSimplified } from '../.storybook/decorators'

beforeMount(async ({ App }) => withThemeSimplified(App))
