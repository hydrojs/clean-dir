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
