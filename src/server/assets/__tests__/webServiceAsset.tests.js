
import WebServiceAsset from '../classes/webServiceAsset';

const mockCheck = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'webservice',
  url: 'www.someurl.co.uk',
  expectedStatusCode: 200,
  expectedResponseTime: 500,
  payload: 'somepayloadvalue',
  headers: 'someheaders',
  method: 'post',
};

describe('#WebServiceComponentClass', function () {

  it('should allow a Web Service check to be defined', function () {

    const result = new WebServiceAsset(mockCheck);
    expect(result.key).toEqual(mockCheck.key);
    expect(result.name).toEqual(mockCheck.name);
    expect(result.description).toEqual(mockCheck.description);
    expect(result.checkType).toEqual(mockCheck.checkType);
    expect(result.url).toEqual(mockCheck.url);
    expect(result.payload).toEqual(mockCheck.payload);
    expect(result.headers).toEqual(mockCheck.headers);
    expect(result.method).toEqual(mockCheck.method);

    expect(result.getKey()).toEqual(mockCheck.key);
    expect(result.getName()).toEqual(mockCheck.name);
    expect(result.getDescription()).toEqual(mockCheck.description);
    expect(result.getCheckType()).toEqual(mockCheck.checkType);
    expect(result.getUrl()).toEqual(mockCheck.url);
    expect(result.getPayload()).toEqual(mockCheck.payload);
    expect(result.getHeaders()).toEqual(mockCheck.headers);
    expect(result.getMethod()).toEqual(mockCheck.method);


    expect(result.expectedResponseCode).toEqual(mockCheck.expectedResponseCode);
    expect(result.expectedResponseTime).toEqual(mockCheck.expectedResponseTime);
    expect(result.getExpectedResponseCode()).toEqual(mockCheck.expectedResponseCode);
    expect(result.getExpectedResponseTime()).toEqual(mockCheck.expectedResponseTime);

  });

  it('should allow the URL to be updated using getters and setters', function () {

    const result = new WebServiceAsset(mockCheck);
    expect(result.getUrl()).toEqual(mockCheck.url);

    result.setUrl('New Url');
    expect(result.getUrl()).toEqual('New Url');
    expect(result.url).toEqual('New Url');

  });

  it('should allow the payload to be updated using getters and setters', function () {

    const result = new WebServiceAsset(mockCheck);
    expect(result.getPayload()).toEqual(mockCheck.payload);

    result.setPayload('newpayload');
    expect(result.getPayload()).toEqual('newpayload');
    expect(result.payload).toEqual('newpayload');

  });

  it('should allow the method to be updated using getters and setters', function () {

    const result = new WebServiceAsset(mockCheck);
    expect(result.getMethod()).toEqual(mockCheck.method);

    result.setMethod('get');
    expect(result.getMethod()).toEqual('get');
    expect(result.method).toEqual('get');

  });

  it('should be able to get a JSON object of the asset.', function () {

    const result = new WebServiceAsset(mockCheck);
    const timestampVal = 123456789;

    expect(result.getActualResponseTime()).toEqual(null);
    expect(result.actualResponseTime).toEqual(null);

    result.setTimestamp(timestampVal);
    result.setExpectedResponseCode(200);
    result.setActualResponseCode(200);
    result.setExpectedResponseTime(20);
    result.setActualResponseTime(20);

    expect(result.toJson()).toEqual({"actualCodeResult": "Pass", "actualResponseCode": 200, "actualResponseTime": 20, "actualTimeResult": "Pass", "description": "The description", "expectedResponseCode": 200, "expectedResponseTime": 20, "headers": "someheaders", "key": 0, "method": "post", "name": "Name of the check", "payload": "somepayloadvalue", "type": "webservice", "url": "www.someurl.co.uk"});
  });

});
