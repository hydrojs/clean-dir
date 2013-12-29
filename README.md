[![NPM
version](https://badge.fury.io/js/hydro-clean-dir.png)](http://badge.fury.io/js/hydro-clean-dir)
[![Build Status](https://secure.travis-ci.org/hydrojs/hydro-clean-dir.png)](http://travis-ci.org/hydrojs/hydro-clean-dir)
[![Coverage Status](https://coveralls.io/repos/hydrojs/hydro-clean-dir/badge.png?branch=master)](https://coveralls.io/r/hydrojs/hydro-clean-dir?branch=master)

# hydro-clean-dir

## Synopsis

Empty given directories after each test.

Useful to clean local tmp locations.

## Usage

Config:

```js
hydro.set({
  plugins: ['hydro-clean-dir'],
  cleanDir: {
    keepDot: true // keep dot files, default: false
    paths: [join('test', 'tmp')] // array of paths to directories
  }
});
```

## Installation

#### npm:

```bash
npm install hydro-clean-dir
```

## Tests

```bash
$ npm test
```

## License

The MIT License (see LICENSE)
