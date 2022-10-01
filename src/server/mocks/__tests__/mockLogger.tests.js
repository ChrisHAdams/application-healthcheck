
//const { expect } = require('chai');
//const Log = require('../mockLogger');

import Log from '../mockLogger';

let log;

describe('#dummyLogger', function () {

  beforeEach(function () {
    log = new Log();
    //log = Log;
  });

  it('should be able to log info messages', function () {

    const testMessage = 'Test Message';

    log.info(testMessage);

    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toEqual(testMessage);

  });

  it('should be able to log error messages', function () {

    const testMessage = 'Test Message';

    log.error(testMessage);

    expect(log.getLogEntries()[0].type).toEqual('error');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toEqual(testMessage);

  });
});
