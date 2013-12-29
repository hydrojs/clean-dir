/**
 * Core dependencies.
 */

var fs = require('fs');
var join = require('path').join;

/**
 * External dependencies.
 */

var rmrf = require('rimraf');

/**
 * @param {Hydro} hydro
 * @api public
 */

module.exports = function(hydro) {
  var opts = hydro.get('cleanDir') || {};
  var paths = opts.paths;
  var keepDot = opts.keepDot;

  if (!paths || !paths.length) {
    return;
  }

  hydro.on('post:test', function() {
    paths.forEach(function(path) {
      fs.readdirSync(path).forEach(function(file) {
        if (file[0] === '.' && keepDot) return;
        var full = join(path, file);
        if (fs.statSync(full).isDirectory()) rmrf.sync(full);
        else fs.unlinkSync(full);
      });
    });
  });
};
