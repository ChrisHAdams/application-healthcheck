import ServerCheck from '../serverCheck';
import ServerComponentClass from '../../classes/serverComponentClass';

const { expect } = require('chai');

const mockServerConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'server',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: '50.04.03.23.34',
  resolveWithFullResponse: true,
};

const validServerConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'server',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: '192.168.0.28',
  resolveWithFullResponse: true,
};

const Log = require('../../common/__tests__/mockLogger');

let log;

describe('#ServerCheckClass', function () {

  beforeEach(function () {
    log = new Log();
  });

  it('should reject an invalid URL and log an error', async function () {
    const serverComponent = new ServerComponentClass(mockServerConfigObject);
    const response = await ServerCheck.makeServerRequest(serverComponent, log);

    expect(response.getActualResponseCode()).to.equal(500);
    expect(log.getLogEntries()[1].type).to.equal('info');
    expect(log.getLogEntries()[1].message).to.contain('Called Name of the check check.  Response code 500.  Response time');
    expect(log.getLogEntries().length).to.equal(2);


  });

});
