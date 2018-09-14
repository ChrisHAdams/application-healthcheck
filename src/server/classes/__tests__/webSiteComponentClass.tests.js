// const ExpectedResultClass = require('../expectedResultClass');

import WebsiteComponentClass from '../websiteComponentClass';

const { expect } = require('chai');

const mockCheck = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'website',
  url: 'www.someurl.co.uk',
  expectedStatusCode: 200,
  expectedResponseTime: 500,
};

describe('#WebSiteComponentClass', function () {

  it('should allow a website check to be defined', function () {

    const result = new WebsiteComponentClass(mockCheck);
    expect(result.key).to.equal(mockCheck.key);
    expect(result.name).to.equal(mockCheck.name);
    expect(result.description).to.equal(mockCheck.description);
    expect(result.checkType).to.equal(mockCheck.checkType);
    expect(result.url).to.equal(mockCheck.url);

    expect(result.getKey()).to.equal(mockCheck.key);
    expect(result.getName()).to.equal(mockCheck.name);
    expect(result.getDescription()).to.equal(mockCheck.description);
    expect(result.getCheckType()).to.equal(mockCheck.checkType);
    expect(result.getUrl()).to.equal(mockCheck.url);

    expect(result.expectedResponseCode).to.equal(mockCheck.expectedResponseCode);
    expect(result.expectedResponseTime).to.equal(mockCheck.expectedResponseTime);
    expect(result.getExpectedResponseCode()).to.equal(mockCheck.expectedResponseCode);
    expect(result.getExpectedResponseTime()).to.equal(mockCheck.expectedResponseTime);

  });

  it('should allow the URL to be updated using getters and setters', function () {

    const result = new WebsiteComponentClass(mockCheck);
    expect(result.getUrl()).to.equal(mockCheck.url);


    result.setUrl('New Url');
    expect(result.getUrl()).to.equal('New Url');
    expect(result.url).to.equal('New Url');

  });

});
