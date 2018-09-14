const fs = require('fs');

exports.writeLineToFile = function (log, path, fileName, outputString) {

  fs.appendFileSync(`${path}/${fileName}`, `\n${outputString}`, (err) => {
    if (err) throw err;
    log.error(err);
  });
};
