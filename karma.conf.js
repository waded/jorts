module.exports = function (config) {
  config.set({
    frameworks: ['qunit'],
    browsers: ['PhantomJS'],
    plugins: ['karma-qunit', 'karma-phantomjs-launcher'],
    files: ['*.js']
  })
}
