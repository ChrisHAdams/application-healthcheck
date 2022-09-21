import ServerCheck from '../classes/serverCheck';
import ServerAsset from '../../assets/classes/serverAsset';
import MockServerCheck from '../../mocks/mockServerCheckClass';


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

const invalidServerConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'server',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: '',
  resolveWithFullResponse: true,
};

const validServerConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'server',
  expectedResponseCode: 200,
  expectedResponseTime: 100,
  url: 'localhost',
  resolveWithFullResponse: true,
};

const Log = require('../../mocks/mockLogger');

let log;

describe('#ServerCheckClass', function () {

  beforeEach(function () {
    log = new Log();
  });

  it('should reject an invalid URL and log an error', async function () {
    const serverComponent = new ServerAsset(mockServerConfigObject);
    const response = await ServerCheck.makeServerRequest(serverComponent, log);

    expect(response.getActualResponseCode()).toEqual(500);
    expect(log.getLogEntries()[1].type).toEqual('info');
    expect(log.getLogEntries()[1].message).toContain('Called Name of the check check.  Response code 500.  Response time');
    expect(log.getLogEntries().length).toEqual(2);


  });

  it('should reject an empty URL and log an error', async function () {
    const serverComponent = new ServerAsset(invalidServerConfigObject);
    const response = await ServerCheck.makeServerRequest(serverComponent, log);

    expect(response.getActualResponseCode()).toEqual('No URL');
    expect(log.getLogEntries()[0].type).toEqual('error');
    expect(log.getLogEntries()[0].message).toContain('Error - Called Name of the check check.  Response code No URL.  Response time 0ms.');
    expect(log.getLogEntries().length).toEqual(1);


  });

  it('should return response time and code for valid URL', async function () {
    const serverComponent = new ServerAsset(validServerConfigObject);
    const response = await ServerCheck.makeServerRequest(serverComponent, log);

    expect(response.getActualResponseCode()).toEqual(200);
    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries()[0].message).toContain('Called Name of the check.  Response Code : 200.  Response Time : ');
    expect(log.getLogEntries().length).toEqual(2);


  });

  it('should reject an invalid URL and log an error', async function () {
    const serverComponent = new ServerAsset(mockServerConfigObject);
    const response = await MockServerCheck.makeInvalidServerCall(serverComponent, log);

    expect(response.getActualResponseCode()).toEqual(500);
    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries()[0].message).toContain('Called Name of the check.  Response Code : 500.  Response Time : 100.');
    expect(log.getLogEntries().length).toEqual(1);


  });


  it('should return response time and code for valid URL', async function () {
    const serverComponent = new ServerAsset(mockServerConfigObject);
    const response = await MockServerCheck.makeValidServerCall(serverComponent, log);

    expect(response.getActualResponseCode()).toEqual(200);
    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries()[0].message).toContain('Called Name of the check.  Response Code : 200.  Response Time : 10.');
    expect(log.getLogEntries().length).toEqual(1);


  });
});
