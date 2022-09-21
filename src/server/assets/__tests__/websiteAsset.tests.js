// const ExpectedResultClass = require('../expectedResultClass');

import WebsiteAsset from '../classes/websiteAsset';


const mockCheck = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'website',
  url: 'www.someurl.co.uk',
  expectedStatusCode: 200,
  expectedResponseTime: 500,
};

describe('#WebSiteAsset', function () {

  it('should allow a website check to be defined', function () {

    const result = new WebsiteAsset(mockCheck);
    expect(result.key).toEqual(mockCheck.key);
    expect(result.name).toEqual(mockCheck.name);
    expect(result.description).toEqual(mockCheck.description);
    expect(result.checkType).toEqual(mockCheck.checkType);
    expect(result.url).toEqual(mockCheck.url);

    expect(result.getKey()).toEqual(mockCheck.key);
    expect(result.getName()).toEqual(mockCheck.name);
    expect(result.getDescription()).toEqual(mockCheck.description);
    expect(result.getCheckType()).toEqual(mockCheck.checkType);
    expect(result.getUrl()).toEqual(mockCheck.url);

    expect(result.expectedResponseCode).toEqual(mockCheck.expectedResponseCode);
    expect(result.expectedResponseTime).toEqual(mockCheck.expectedResponseTime);
    expect(result.getExpectedResponseCode()).toEqual(mockCheck.expectedResponseCode);
    expect(result.getExpectedResponseTime()).toEqual(mockCheck.expectedResponseTime);

  });

  it('should allow the URL to be updated using getters and setters', function () {

    const result = new WebsiteAsset(mockCheck);
    expect(result.getUrl()).toEqual(mockCheck.url);


    result.setUrl('New Url');
    expect(result.getUrl()).toEqual('New Url');
    expect(result.url).toEqual('New Url');

  });

});
