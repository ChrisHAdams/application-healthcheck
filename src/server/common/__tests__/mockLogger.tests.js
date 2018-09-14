
const { expect } = require('chai');
const Log = require('./mockLogger');

let log;

describe('#dummyLogger', function () {

  beforeEach(function () {
    log = new Log();
  });

  it('should be able to log info messages', function () {

    const testMessage = 'Test Message';

    log.info(testMessage);

    expect(log.getLogEntries()[0].type).to.equal('info');
    expect(log.getLogEntries().length).to.equal(1);
    expect(log.getLogEntries()[0].message).to.equal(testMessage);
  });

  it('should be able to log error messages', function () {
    const testMessage = 'Test Message';

    log.error(testMessage);

    expect(log.getLogEntries()[0].type).to.equal('error');
    expect(log.getLogEntries().length).to.equal(1);
    expect(log.getLogEntries()[0].message).to.equal(testMessage);
  });
});
