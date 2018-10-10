'use strict';

var fs = require('fs');

exports.writeLineToFile = function (log, path, fileName, outputString) {

  fs.appendFileSync(path + '/' + fileName, '\n' + outputString, function (err) {
    if (err) throw err;
    log.error(err);
  });
};