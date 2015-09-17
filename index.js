var Promise = require('promise'),
  getPartialDirs = require('get-assemble-partial-dirs');

var fs = require('fs'),
  path = require('path');

module.exports = function (params, name, cb) {

  getPartialDirs(params, function (err, dirs) {
    if (err) {
      cb(err);
    }

    Promise.all(dirs.map(function (dir) {
      return new Promise(function (resolve, reject) {
        fs.stat(path.resolve(dir, name + '.hbs'), function (error, stats) {
          if (error) {
            if (error.errno === -2) {
              resolve(false);
            } else {
              reject(error);
            }
          }

          resolve(true);
        });
      });
    }))
    .then(function (res) {
      var isExist = res.some(function (item) {
        return !!item;
      });
      cb(null, isExist);
    })
    .catch(function (e) {
      cb(e);
    });

  });
};
