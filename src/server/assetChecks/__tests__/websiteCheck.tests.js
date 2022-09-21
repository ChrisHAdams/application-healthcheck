import WebsiteAssetClass from '../../assets/classes/websiteAsset';
import WebsiteCheck from '../classes/websiteCheck';
import MockWebsiteCheck from '../../mocks/mockWebsiteCheckClass';


const mockServiceConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'The type of check',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'some url',
  resolveWithFullResponse: true,
};

const validServiceConfigObject = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'The type of check',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'http://www.bbc.co.uk',
  resolveWithFullResponse: true,
};

const Log = require('../../mocks/mockLogger');

let log;

describe('# WebsiteCheckClass', function () {

  beforeEach(function () {
    log = new Log();
  });

  it('should reject an invalid URL and log an error', async function () {
    const websiteComponent = new WebsiteAssetClass(mockServiceConfigObject);
    const response = await WebsiteCheck.makeHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).toEqual('Error: Invalid URI "some%20url"');
    expect(log.getLogEntries()[1].type).toEqual('error');
    expect(log.getLogEntries().length).toEqual(2);
    expect(log.getLogEntries()[1].message).toContain('Error: Invalid URI "some%20url"');

  });

  it('should test a website and return a 200', async function () {
    const websiteComponent = new WebsiteAssetClass(mockServiceConfigObject);
    websiteComponent.setUrl('http://bbc.co.uk');
    const response = await MockWebsiteCheck.makeValidHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).toEqual(200);

    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toContain('Called http://bbc.co.uk.  Response code 200.  Response time ');

  });

  it('should test a real website and return a 200', async function () {
    const websiteComponent = new WebsiteAssetClass(validServiceConfigObject);
    const response = await WebsiteCheck.makeHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).toEqual(200);

    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(2);
    expect(log.getLogEntries()[1].message).toContain('Called Name of the check check.  Response code 200.');

  });

  it('should attempt to check a website but return a 404', async function () {
    const websiteComponent = new WebsiteAssetClass(mockServiceConfigObject);
    websiteComponent.setUrl('http://bbc.co.uk');
    websiteComponent.setExpectedResponseCode(404);

    const response = await MockWebsiteCheck.makePageNotFoundHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).toEqual(404);


    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toContain('Called http://bbc.co.uk.  Response code 404.  Response time ');

  });

  it('should attempt to check a website but return a 500', async function () {
    const websiteComponent = new WebsiteAssetClass(mockServiceConfigObject);
    websiteComponent.setUrl('http://bbc.co.uk');
    websiteComponent.setExpectedResponseCode(500);

    const response = await MockWebsiteCheck.makeServerErrorHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).toEqual(500);


    expect(log.getLogEntries()[0].type).toEqual('info');
    expect(log.getLogEntries().length).toEqual(1);
    expect(log.getLogEntries()[0].message).toContain('Called http://bbc.co.uk.  Response code 500');

  });

});
