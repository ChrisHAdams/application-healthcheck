
import Log from '../logger';
const fs = require('fs');
const config = require('config');
const logDir = config.get('healthcheck.options.appLogFolder');
const logName = config.get('healthcheck.options.appLogName');

describe('#dummyLogger', function () {

  beforeAll(function () {

    if (fs.existsSync(logDir)) {
      fs.rmdirSync(logDir,{ recursive: true });
    }

  });

  afterAll(function () {

  });

  it('should be able to log info messages', function () {

    const testMessage = 'Test Message';

    Log.info(testMessage);

  });

});