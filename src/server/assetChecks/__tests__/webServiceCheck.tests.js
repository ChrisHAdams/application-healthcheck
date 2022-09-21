import WebServiceAssetClass from '../../assets/classes/webServiceAsset';
import WebServiceCheck from '../classes/webServiceCheck';
import MockwebServiceCheck from '../../mocks/mockWebServiceCheckClass';

const mockServiceConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'The type of check',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'some url',
  headers: 'headers',
  timeout: 10000,
  resolveWithFullResponse: true,
  method: 'get',
  body: { message: 'the message' },
};

const validServiceConfigObject = {
  key: 0,
  name: 'Valid Check',
  description: 'The description',
  checkType: 'webservice',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'https://reststop.randomhouse.com/resources/authors/3446/',
  headers: '',
  timeout: 10000,
  resolveWithFullResponse: true,
  method: 'get',
  body: { message: 'the message' },
};

const Log = require('../../mocks/mockLogger');

let log;

describe('#WebServiceCheckClass', function () {

  beforeEach(function () {
    log = new Log();
  });

  it('should reject an invalid URL and log an error', async function () {
    const webServiceComponent = new WebServiceAssetClass(mockServiceConfigObject);
    const response = await WebServiceCheck.makeWebServiceRequest(webServiceComponent, log);

    expect(response.getActualResponseCode()).toEqual('Error: Invalid URI "some%20url"');
    expect(log.getLogEntries()[1].type).toEqual('error');
    expect(log.getLogEntries().length).toEqual(2);
    expect(log.getLogEntries()[1].message).toContain('Error: Invalid URI "some%20url"');

  });

  it('should test a webService and return a 200', async function () {
    const webServiceComponent = new WebServiceAssetClass(mockServiceConfigObject);
    webServiceComponent.setUrl('http://bbc.co.uk');
    const response = await MockwebServiceCheck.makeValidHttpRequest(webServiceComponent, log);

    expect(response.getActualResponseCode()).toEqual(200);

    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toContain('Called http://bbc.co.uk.  Response code 200.  Response time ');

  });

  it('should test a valid webService and return a 200', async function () {
    const webServiceComponent = new WebServiceAssetClass(validServiceConfigObject);
    const response = await WebServiceCheck.makeWebServiceRequest(webServiceComponent, log);

    expect(response.getActualResponseCode()).toEqual(200);

    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(2);
    expect(log.getLogEntries()[1].message).toContain('Called Valid Check check.  Response code 200.');

  });

  it('should attempt to check a webService but return a 404', async function () {
    const webServiceComponent = new WebServiceAssetClass(mockServiceConfigObject);
    webServiceComponent.setUrl('http://bbc.co.uk');
    webServiceComponent.setExpectedResponseCode(404);

    const response = await MockwebServiceCheck.makePageNotFoundHttpRequest(webServiceComponent, log);

    expect(response.getActualResponseCode()).toEqual(404);


    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toContain('Called http://bbc.co.uk.  Response code 404.  Response time ');

  });

  it('should attempt to check a webService but return a 500', async function () {
    const webServiceComponent = new WebServiceAssetClass(mockServiceConfigObject);
    webServiceComponent.setUrl('http://bbc.co.uk');
    webServiceComponent.setExpectedResponseCode(500);

    const response = await MockwebServiceCheck.makeServerErrorHttpRequest(webServiceComponent, log);

    expect(response.getActualResponseCode()).toEqual(500);


    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toContain('Called http://bbc.co.uk.  Response code 500');

  });


});
