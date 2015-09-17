# is-assemble-partial-exist

[![npm version](http://img.shields.io/npm/v/is-assemble-partial-exist.svg?style=flat-square)](https://github.com/makotot/is-assemble-partial-exist)
[![travis](http://img.shields.io/travis/makotot/is-assemble-partial-exist.svg?style=flat-square)](https://github.com/makotot/is-assemble-partial-exist)
[![dependencies](http://img.shields.io/david/makotot/is-assemble-partial-exist.svg?style=flat-square)](https://github.com/makotot/is-assemble-partial-exist)
[![devDependencies](http://img.shields.io/david/dev/makotot/is-assemble-partial-exist.svg?style=flat-square)](https://github.com/makotot/is-assemble-partial-exist)
[![License](http://img.shields.io/npm/l/is-assemble-partial-exist.svg?style=flat-square)](https://github.com/makotot/is-assemble-partial-exist)

> Check if the [assemble](http://assemble.io/) partial is found in the partial directories

## Install

```sh
$ npm i --save is-assemble-partial-exist
```


## Usage

In assemble plugin:
```js
var isPartialExist = require('is-assemble-partial-exist');

module.exports = function (params, cb) {

  isPartialExist(params, 'header', function (err, data) {
    console.log(data);
    // => true

    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
```


## License

MIT

