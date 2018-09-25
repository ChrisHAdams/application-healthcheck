
const winston = require('winston');
const Rotate = require('winston-daily-rotate-file');
const fs = require('fs');
const config = require('config');

const env = process.env.NODE_ENV || 'development';
const logDir = config.get('healthcheck.options.appLogFolder');
const logName = config.get('healthcheck.options.appLogName');

// const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info',
    }),
    // new (require('winston-daily-rotate-file'))({
    new (Rotate)({
      filename: `${logDir}/${logName}-app.log`,
      timestamp: tsFormat,
      datePattern: 'YYYY-MM-DD',
      prepend: true,
      level: env === 'development' ? 'verbose' : 'info',
    }),
  ],
});

module.exports = logger;
