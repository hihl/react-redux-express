/**
  * Created by Zhengfeng Yao on 16/8/29.
  */
import webpackConfig from './webpack.config.test';

module.exports = config => {
  config.set({
    basePath: '../',
    browsers: [ 'PhantomJS' ],
    files: [
      'test/loadClientTests.js'
    ],
    port: 3000,
    captureTimeout: 60000,
    frameworks: [ 'mocha', 'chai' ],
    client: {
      mocha: {}
    },
    reporters: [ 'mocha', 'coverage' ],
    preprocessors: {
      'test/loadClientTests.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: webpackConfig,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    },
    logLevel: 'LOG_DEBUG'
  });
}
