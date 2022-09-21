
import AssetBase from '../classes/assetBase';

const NotYetCheckedMessage = 'Check not yet executed';

const mockCheck = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'The type of check',
  url: 'The URL of the asset',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
};

describe('#AssetClass', function () {

  it('should allow a asset check to be defined from a config object', function () {

    const result = new AssetBase(mockCheck);
    expect(result.key).toEqual(mockCheck.key);
    expect(result.name).toEqual(mockCheck.name);
    expect(result.description).toEqual(mockCheck.description);
    expect(result.url).toEqual(mockCheck.url);
    expect(result.checkType).toEqual(mockCheck.checkType);

    expect(result.getKey()).toEqual(mockCheck.key);
    expect(result.getName()).toEqual(mockCheck.name);
    expect(result.getDescription()).toEqual(mockCheck.description);
    expect(result.getCheckType()).toEqual(mockCheck.checkType);

    expect(result.expectedResponseCode).toEqual(mockCheck.expectedResponseCode);
    expect(result.expectedResponseTime).toEqual(mockCheck.expectedResponseTime);
    expect(result.getExpectedResponseCode()).toEqual(mockCheck.expectedResponseCode);
    expect(result.getExpectedResponseTime()).toEqual(mockCheck.expectedResponseTime);

  });

  it('should allow the key to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.key).toEqual(mockCheck.key);
    expect(result.getKey()).toEqual(mockCheck.key);

    result.setKey(2);
    expect(result.key).toEqual(2);
    expect(result.getKey()).toEqual(2);

  });

  it('should allow the name to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.name).toEqual(mockCheck.name);
    expect(result.getName()).toEqual(mockCheck.name);

    result.setName('New Name');
    expect(result.name).toEqual('New Name');
    expect(result.getName()).toEqual('New Name');

  });

  it('should allow the description to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.description).toEqual(mockCheck.description);
    expect(result.getDescription()).toEqual(mockCheck.description);

    result.setDescription('New Description');
    expect(result.description).toEqual('New Description');
    expect(result.getDescription()).toEqual('New Description');

  });

  it('should allow the checkType to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.checkType).toEqual(mockCheck.checkType);
    expect(result.getCheckType()).toEqual(mockCheck.checkType);

    result.setCheckType('other check');
    expect(result.checkType).toEqual('other check');
    expect(result.getCheckType()).toEqual('other check');

  });

  it('should allow the url to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.url).toEqual(mockCheck.url);
    expect(result.getUrl()).toEqual(mockCheck.url);

    result.setUrl('other Url');
    expect(result.url).toEqual('other Url');
    expect(result.getUrl()).toEqual('other Url');

  });

  it('should allow the expectedResponseCode to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.getExpectedResponseCode()).toEqual(mockCheck.expectedResponseCode);
    expect(result.expectedResponseCode).toEqual(mockCheck.expectedResponseCode);


    result.setExpectedResponseCode(400);
    expect(result.getExpectedResponseCode()).toEqual(400);
    expect(result.expectedResponseCode).toEqual(400);

  });

  it('should allow the expectedResponseTime to be updated using getters and setters', function () {

    const result = new AssetBase(mockCheck);
    expect(result.getExpectedResponseTime()).toEqual(mockCheck.expectedResponseTime);
    expect(result.expectedResponseTime).toEqual(mockCheck.expectedResponseTime);


    result.setExpectedResponseTime(1000);
    expect(result.getExpectedResponseTime()).toEqual(1000);
    expect(result.expectedResponseTime).toEqual(1000);

  });


  it('should report that a check has not ran when asking for results early', function () {

    const result = new AssetBase(mockCheck);

    expect(result.checkResponseCodeResult()).toEqual(NotYetCheckedMessage);
    expect(result.getResponseCodeResultMessage()).toEqual(NotYetCheckedMessage);
    expect(result.checkResponseTimeResult()).toEqual(NotYetCheckedMessage);
    expect(result.getResponseTimeResultMessage()).toEqual(NotYetCheckedMessage);
    expect(result.getResponseSummaryMessage()).toEqual('Name of the check check not yet executed.');
    expect(result.getTimestamp()).toEqual(null);
  });

  it('should allow the actualResponseTime to be set', function () {

    const result = new AssetBase(mockCheck);
    expect(result.getActualResponseTime()).toEqual(null);
    expect(result.actualResponseTime).toEqual(null);


    result.setActualResponseTime(1000);
    expect(result.getActualResponseTime()).toEqual(1000);
    expect(result.actualResponseTime).toEqual(1000);

  });

  it('should allow the actualResponseCode to be set', function () {

    const result = new AssetBase(mockCheck);
    expect(result.getActualResponseCode()).toEqual(null);
    expect(result.actualResponseCode).toEqual(null);


    result.setActualResponseCode(200);
    expect(result.getActualResponseCode()).toEqual(200);
    expect(result.actualResponseCode).toEqual(200);

  });

  it('should be able to check the expected versus actual response code result', function () {

    const result = new AssetBase(mockCheck);

    expect(result.getActualResponseCode()).toEqual(null);
    expect(result.actualResponseCode).toEqual(null);

    result.setExpectedResponseCode(200);
    result.setActualResponseCode(100);

    expect(result.checkResponseCodeResult()).toEqual('Fail');
    result.setActualResponseCode(200);
    expect(result.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to check the expected versus actual response time result', function () {

    const result = new AssetBase(mockCheck);

    expect(result.getActualResponseTime()).toEqual(null);
    expect(result.actualResponseTime).toEqual(null);

    result.setExpectedResponseTime(200);
    result.setActualResponseTime(400);

    expect(result.checkResponseTimeResult()).toEqual('Fail');
    result.setActualResponseTime(50);
    expect(result.checkResponseTimeResult()).toEqual('Pass');

  });

  it('should be able to get summary messages following a check', function () {

    const result = new AssetBase(mockCheck);
    const timestampVal = 123456789;

    expect(result.getActualResponseTime()).toEqual(null);
    expect(result.actualResponseTime).toEqual(null);

    result.setTimestamp(timestampVal);
    result.setExpectedResponseCode(200);
    result.setActualResponseCode(200);
    result.setExpectedResponseTime(20);
    result.setActualResponseTime(20);

    expect(result.getResponseCodeResultMessage()).toEqual('Expected Response Code is 200.\n                  Actual Response Code is 200.\n                  Result is a Pass.');
    expect(result.getResponseTimeResultMessage()).toEqual('Expected Response Time is 20.\n                  Actual Response Time is 20.\n                  Result is a Pass.');
    expect(result.getResponseSummaryMessage()).toEqual('Called Name of the check check.  Response code 200.  Response time 20ms.');

  });

  it('should be able to get a JSON object of the asset.', function () {

    const result = new AssetBase(mockCheck);
    const timestampVal = 123456789;

    expect(result.getActualResponseTime()).toEqual(null);
    expect(result.actualResponseTime).toEqual(null);

    result.setTimestamp(timestampVal);
    result.setExpectedResponseCode(200);
    result.setActualResponseCode(200);
    result.setExpectedResponseTime(20);
    result.setActualResponseTime(20);

    expect(result.toJson()).toEqual({"actualCodeResult": "Pass", "actualResponseCode": 200, "actualResponseTime": 20, "actualTimeResult": "Pass", "description": "The description", "expectedResponseCode": 200, "expectedResponseTime": 20, "key": 0, "name": "Name of the check", "type": "The type of check", "url": "The URL of the asset"});
  });

});
