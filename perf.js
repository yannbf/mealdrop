const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const clearCacheCommand = 'rm -rf node_modules/.vite && rm -rf node_modules/.cache'

const commands = {
  storyshots: `hyperfine --warmup 1 "node_modules/.bin/vitest run -c test.node.config.ts storybook.test.ts"`,
  'storyshots:browser': `hyperfine --warmup 1 "node_modules/.bin/vitest run -c test.browser.config.ts storybook.test.ts"`,
  'storyshots:browser:wdio': `hyperfine --warmup 1  "WDIO=true node_modules/.bin/vitest run -c test.browser.config.ts storybook.test.ts"`,
  plugin: `hyperfine --warmup 1 "PLUGIN_ONLY=true node_modules/.bin/vitest run -c test.node.config.ts"`,
  'plugin:browser': `hyperfine --warmup 1 "PLUGIN_ONLY=true node_modules/.bin/vitest run -c test.browser.config.ts"`,
  'plugin:browser:wdio': `hyperfine --warmup 1 "WDIO=true PLUGIN_ONLY=true node_modules/.bin/vitest run -c test.browser.config.ts"`,
  'test-storybook': `hyperfine --warmup 1 "node_modules/.bin/test-storybook"`,
  'test-ct': `hyperfine --warmup 1 "node_modules/.bin/playwright test"`,
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error('Please provide a command to run.')
  process.exit(1)
}

const commandKey = args.join(':')

if (commands[commandKey]) {
  console.log(`Running command:\n${commands[commandKey]}\n\n`)
  const debugCommand = process.env.DEBUG === 'true' ? ' --runs 1 --show-output' : ''
  try {
    const output = execSync(`${commands[commandKey]}${debugCommand}`, {
      stdio: 'pipe',
      cwd: process.cwd(),
    }).toString()

    // Create the perf_results directory if it doesn't exist
    const resultsDir = path.join(__dirname, 'perf_results')
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir)
    }

    // Define the file path for the command output
    const filePath = path.join(resultsDir, `${commandKey.replace(/:/g, '_')}.txt`)

    // Write the output to the file
    fs.writeFileSync(
      filePath,
      `Test:${commandKey}\nCommand:${commands[commandKey]}\nResults:\n${output}`
    )

    console.log(`Results written to ${filePath}`)
  } catch (error) {
    console.error(`Error executing command: ${error.message}`)
    process.exit(1)
  }
} else {
  console.error(`Unknown command: ${commandKey}`)
  process.exit(1)
}
