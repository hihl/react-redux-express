require('babel-polyfill');

// Add support for all files in the test directory
const testsContext = require.context('./client', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);
