// This file will not be transpiled, so it must use CommonJS and ES5

// Register babel to transpile software in test before the tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () { };
