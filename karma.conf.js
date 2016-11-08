module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
        // app code
        'tests/dummy.js',

        // specs
        'tests/specs/**/*.spec.js'
    ],
    autoWatch: true,
    singleRun: false,
    logLevel: config.LOG_INFO
  });
};
