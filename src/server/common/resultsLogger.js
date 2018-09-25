
const winston = require('winston');
const Rotate = require('winston-daily-rotate-file');
const fs = require('fs');
const config = require('config');

const env = process.env.NODE_ENV || 'development';
const logDir = config.get('healthcheck.options.resultLogFolder');
const logName = config.get('healthcheck.options.resultLogName');

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const resultsLogger = new (winston.Logger)({
  transports: [
    // new (require('winston-daily-rotate-file'))({
    new (Rotate)({
      filename: `${logDir}/${logName}-results.log`,
      timestamp: '',
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info',
    }),
  ],
});

module.exports = resultsLogger;
