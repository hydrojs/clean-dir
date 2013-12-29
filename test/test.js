var fs = require('fs');
var join = require('path').join;
var dest = join(__dirname, 'tmp');

test('write files', function(done) {
  fs.writeFileSync(join(dest, 'foo.js'));
  fs.writeFileSync(join(dest, 'other.js'));
  fs.writeFileSync(join(dest, '.dot'));
  fs.mkdirSync(join(dest, 'sub'));
  fs.writeFileSync(join(dest, 'sub', 'third.js'));
  done();
});

test('files are gone', function() {
  var expected = ['.keep', '.dot'];
  var actual = fs.readdirSync(dest);

  actual.forEach(function(file) {
    assert(expected.indexOf(file) > -1, 'unexpected file: ' + file);
  });
});
