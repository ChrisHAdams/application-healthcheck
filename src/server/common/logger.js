const winston = require('winston');
const Rotate = require('winston-daily-rotate-file');
const fs = require('fs');
const config = require('config');

//const env = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV;
const logDir = config.get('healthcheck.options.appLogFolder');
const logName = config.get('healthcheck.options.appLogName');

let loggingLevel = '';

if (env == 'development' || env == 'test') {

  loggingLevel = 'verbose';

} else {

  loggingLevel = 'info';

}

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      level: 'info',
      handleExceptions: true,
      json: false,
      colorize: true,
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level} : ${info.message}`),
      )
    }),
    new (Rotate)({
      filename: `${logDir}/${logName}-app.log`,
      prepend: true,
      level: loggingLevel,
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level} : ${info.message}`),
      )
    }),
  ],
});

module.exports = logger;

