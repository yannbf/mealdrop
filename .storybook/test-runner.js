module.exports = {
  async postRender(page) {
    await jestPlaywright.saveCoverage(page)
  },
};
