
import Log from '../resultsLogger';
const fs = require('fs');
const config = require('config');
const logDir = config.get('healthcheck.options.resultLogFolder');


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