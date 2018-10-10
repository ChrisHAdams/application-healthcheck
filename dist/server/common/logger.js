'use strict';

var winston = require('winston');
var Rotate = require('winston-daily-rotate-file');
var fs = require('fs');

var env = process.env.NODE_ENV || 'development';
var logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

var tsFormat = function tsFormat() {
  return new Date().toLocaleTimeString();
};

var logger = new winston.Logger({
  transports: [
  // colorize the output to the console
  new winston.transports.Console({
    timestamp: tsFormat,
    colorize: true,
    level: 'info'
  }),
  // new (require('winston-daily-rotate-file'))({
  new Rotate({
    filename: logDir + '/-app.log',
    timestamp: tsFormat,
    datePattern: 'YYYY-MM-DD',
    prepend: true,
    level: env === 'development' ? 'verbose' : 'info'
  })]
});

module.exports = logger;