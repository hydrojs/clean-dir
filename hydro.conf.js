/**
 * Core dependencies.
 */

var join = require('path').join;

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    attach: global,
    proxies: {
      test: 'addTest'
    },
    cleanDir: {
      keepDot: true,
      paths: [ join(__dirname, 'test', 'tmp') ]
    },
    suite: 'hydro-clean-dir',
    formatter: 'hydro-simple',
    plugins: [
      require('./')
    ],
    globals: {
      assert: require('assert')
    },
    tests: [
      'test/*.js'
    ]
  });
};
