/*
const winston = require('winston');
const Rotate = require('winston-daily-rotate-file');
const fs = require('fs');
const config = require('config');
*/

import winston from 'winston';
import Rotate from 'winston-daily-rotate-file';
import fs from 'fs';
import config from 'config';

const logDir = config.get('healthcheck.options.resultLogFolder');
const logName = config.get('healthcheck.options.resultLogName');

let loggingLevel = 'info';
let resultsLogger;

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

export default resultsLogger = winston.createLogger({
  transports: [
    new (Rotate)({
      filename: `${logDir}/${logName}-app.log`,

      datePattern: 'YYYY-MM-DD',
      prepend: true,
      level: loggingLevel
    }),
  ],
});

