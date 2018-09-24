import WebsiteComponentClass from '../../classes/websiteComponentClass';
import WebsiteCheck from '../websiteCheck';
import MockWebsiteCheck from './mockWebsiteCheckClass';

const { expect } = require('chai');

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

const Log = require('../../common/__tests__/mockLogger');

let log;

describe('# WebsiteCheckClass', function () {

  beforeEach(function () {
    log = new Log();
  });

  it('should reject an invalid URL and log an error', async function () {
    const websiteComponent = new WebsiteComponentClass(mockServiceConfigObject);
    const response = await WebsiteCheck.makeHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).to.equal('Error: Invalid URI "some%20url"');
    expect(log.getLogEntries()[1].type).to.equal('error');
    expect(log.getLogEntries().length).to.equal(2);
    expect(log.getLogEntries()[1].message).to.contain('Error: Invalid URI "some%20url"');

  });

  it('should test a website and return a 200', async function () {
    const websiteComponent = new WebsiteComponentClass(mockServiceConfigObject);
    websiteComponent.setUrl('http://bbc.co.uk');
    const response = await MockWebsiteCheck.makeValidHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).to.equal(200);

    expect(log.getLogEntries()[0].type).to.equal('info');
    expect(log.getLogEntries().length).to.equal(1);
    expect(log.getLogEntries()[0].message).to.contain('Called http://bbc.co.uk.  Response code 200.  Response time 0ms.');

  });

  it('should test a real website and return a 200', async function () {
    const websiteComponent = new WebsiteComponentClass(validServiceConfigObject);
    const response = await WebsiteCheck.makeHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).to.equal(200);

    expect(log.getLogEntries()[0].type).to.equal('info');
    expect(log.getLogEntries().length).to.equal(2);
    expect(log.getLogEntries()[1].message).to.contain('Called Name of the check check.  Response code 200.');

  });

  it('should attempt to check a website but return a 404', async function () {
    const websiteComponent = new WebsiteComponentClass(mockServiceConfigObject);
    websiteComponent.setUrl('http://bbc.co.uk');
    websiteComponent.setExpectedResponseCode(404);

    const response = await MockWebsiteCheck.makePageNotFoundHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).to.equal(404);


    expect(log.getLogEntries()[0].type).to.equal('info');
    expect(log.getLogEntries().length).to.equal(1);
    expect(log.getLogEntries()[0].message).to.contain('Called http://bbc.co.uk.  Response code 404.  Response time 0ms.');

  });

  it('should attempt to check a website but return a 500', async function () {
    const websiteComponent = new WebsiteComponentClass(mockServiceConfigObject);
    websiteComponent.setUrl('http://bbc.co.uk');
    websiteComponent.setExpectedResponseCode(500);

    const response = await MockWebsiteCheck.makeServerErrorHttpRequest(websiteComponent, log);

    expect(response.getActualResponseCode()).to.equal(500);


    expect(log.getLogEntries()[0].type).to.equal('info');
    expect(log.getLogEntries().length).to.equal(1);
    expect(log.getLogEntries()[0].message).to.contain('Called http://bbc.co.uk.  Response code 500');

  });

});
