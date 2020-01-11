module.exports = function (config) {
  config.set({
    frameworks: ['qunit'],
    browsers: ['ChromeHeadless'],
    files: ['*.js']
  })
}
