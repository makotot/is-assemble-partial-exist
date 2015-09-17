var isPartialExist = require('./');

module.exports = function (params, cb) {

  isPartialExist(params, 'header', function (err, data) {
    console.log(data);
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
