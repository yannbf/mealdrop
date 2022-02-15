const { toMatchImageSnapshot } = require('jest-image-snapshot');
const { setPreRender, setPostRender } = require('@storybook/test-runner');

expect.extend({ toMatchImageSnapshot });

// use custom directory/id to align CSF and stories.json mode outputs
const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

setPreRender(async (page, context) => {});

setPostRender(async (page, context) => {
  if(context.title === 'UserFlows/App') {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id+ '-after',
      failureThreshold: 0.03,
      failureThresholdType: 'percent',
    });
  }
});
