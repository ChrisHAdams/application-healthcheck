'use strict';

var winston = require('winston');
var Rotate = require('winston-daily-rotate-file');
var fs = require('fs');

var env = process.env.NODE_ENV || 'development';
var logDir = 'results';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

var resultsLogger = new winston.Logger({
  transports: [
  // new (require('winston-daily-rotate-file'))({
  new Rotate({
    filename: logDir + '/-results.log',
    timestamp: '',
    datePattern: 'YYYY-MM-DD',
    prepend: true,
    level: env === 'development' ? 'verbose' : 'info'
  })]
});

module.exports = resultsLogger;