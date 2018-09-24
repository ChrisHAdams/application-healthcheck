
import ComponentClass from '../componentClass';

const NotYetCheckedMessage = 'Check not yet executed';

const { expect } = require('chai');

const mockCheck = {
  key: 0,
  name: 'Name of the check',
  description: 'The description',
  checkType: 'The type of check',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
};

describe('#ComponentClass', function () {

  it('should allow a component check to be defined from a config object', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.key).to.equal(mockCheck.key);
    expect(result.name).to.equal(mockCheck.name);
    expect(result.description).to.equal(mockCheck.description);
    expect(result.checkType).to.equal(mockCheck.checkType);

    expect(result.getKey()).to.equal(mockCheck.key);
    expect(result.getName()).to.equal(mockCheck.name);
    expect(result.getDescription()).to.equal(mockCheck.description);
    expect(result.getCheckType()).to.equal(mockCheck.checkType);

    expect(result.expectedResponseCode).to.equal(mockCheck.expectedResponseCode);
    expect(result.expectedResponseTime).to.equal(mockCheck.expectedResponseTime);
    expect(result.getExpectedResponseCode()).to.equal(mockCheck.expectedResponseCode);
    expect(result.getExpectedResponseTime()).to.equal(mockCheck.expectedResponseTime);

  });

  it('should allow the key to be updated using getters and setters', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.key).to.equal(mockCheck.key);
    expect(result.getKey()).to.equal(mockCheck.key);

    result.setKey(2);
    expect(result.key).to.equal(2);
    expect(result.getKey()).to.equal(2);

  });

  it('should allow the name to be updated using getters and setters', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.name).to.equal(mockCheck.name);
    expect(result.getName()).to.equal(mockCheck.name);

    result.setName('New Name');
    expect(result.name).to.equal('New Name');
    expect(result.getName()).to.equal('New Name');

  });

  it('should allow the description to be updated using getters and setters', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.description).to.equal(mockCheck.description);
    expect(result.getDescription()).to.equal(mockCheck.description);

    result.setDescription('New Description');
    expect(result.description).to.equal('New Description');
    expect(result.getDescription()).to.equal('New Description');

  });

  it('should allow the checkType to be updated using getters and setters', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.checkType).to.equal(mockCheck.checkType);
    expect(result.getCheckType()).to.equal(mockCheck.checkType);

    result.setCheckType('other check');
    expect(result.checkType).to.equal('other check');
    expect(result.getCheckType()).to.equal('other check');

  });

  it('should allow the expectedResponseCode to be updated using getters and setters', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.getExpectedResponseCode()).to.equal(mockCheck.expectedResponseCode);
    expect(result.expectedResponseCode).to.equal(mockCheck.expectedResponseCode);


    result.setExpectedResponseCode(400);
    expect(result.getExpectedResponseCode()).to.equal(400);
    expect(result.expectedResponseCode).to.equal(400);

  });

  it('should allow the expectedResponseTime to be updated using getters and setters', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.getExpectedResponseTime()).to.equal(mockCheck.expectedResponseTime);
    expect(result.expectedResponseTime).to.equal(mockCheck.expectedResponseTime);


    result.setExpectedResponseTime(1000);
    expect(result.getExpectedResponseTime()).to.equal(1000);
    expect(result.expectedResponseTime).to.equal(1000);

  });


  it('should report that a check has not ran when asking for results early', function () {

    const result = new ComponentClass(mockCheck);

    expect(result.checkResponseCodeResult()).to.equal(NotYetCheckedMessage);
    expect(result.getResponseCodeResultMessage()).to.equal(NotYetCheckedMessage);
    expect(result.checkResponseTimeResult()).to.equal(NotYetCheckedMessage);
    expect(result.getResponseTimeResultMessage()).to.equal(NotYetCheckedMessage);
    expect(result.getResponseSummaryMessage()).to.equal('Name of the check check not yet executed.');
    expect(result.getTimestamp()).to.equal(null);
  });

  it('should allow the actualResponseTime to be set', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.getActualResponseTime()).to.equal(null);
    expect(result.actualResponseTime).to.equal(null);


    result.setActualResponseTime(1000);
    expect(result.getActualResponseTime()).to.equal(1000);
    expect(result.actualResponseTime).to.equal(1000);

  });

  it('should allow the actualResponseCode to be set', function () {

    const result = new ComponentClass(mockCheck);
    expect(result.getActualResponseCode()).to.equal(null);
    expect(result.actualResponseCode).to.equal(null);


    result.setActualResponseCode(200);
    expect(result.getActualResponseCode()).to.equal(200);
    expect(result.actualResponseCode).to.equal(200);

  });

  it('should be able to check the expected versus actual response code result', function () {

    const result = new ComponentClass(mockCheck);

    expect(result.getActualResponseCode()).to.equal(null);
    expect(result.actualResponseCode).to.equal(null);

    result.setExpectedResponseCode(200);
    result.setActualResponseCode(100);

    expect(result.checkResponseCodeResult()).to.equal('Fail');
    result.setActualResponseCode(200);
    expect(result.checkResponseCodeResult()).to.equal('Pass');

  });

  it('should be able to check the expected versus actual response time result', function () {

    const result = new ComponentClass(mockCheck);

    expect(result.getActualResponseTime()).to.equal(null);
    expect(result.actualResponseTime).to.equal(null);

    result.setExpectedResponseTime(200);
    result.setActualResponseTime(400);

    expect(result.checkResponseTimeResult()).to.equal('Fail');
    result.setActualResponseTime(50);
    expect(result.checkResponseTimeResult()).to.equal('Pass');

  });

  it('should be able to get summary messages following a check', function () {

    const result = new ComponentClass(mockCheck);
    const timestampVal = 123456789;

    expect(result.getActualResponseTime()).to.equal(null);
    expect(result.actualResponseTime).to.equal(null);

    result.setTimestamp(timestampVal);
    result.setExpectedResponseCode(200);
    result.setActualResponseCode(200);
    result.setExpectedResponseTime(20);
    result.setActualResponseTime(20);

    expect(result.getResponseCodeResultMessage()).to.equal('Expected Response Code is 200.\n                  Actual Response Code is 200.\n                  Result is a Pass.');
    expect(result.getResponseTimeResultMessage()).to.equal('Expected Response Time is 20.\n                  Actual Response Time is 20.\n                  Result is a Pass.');
    expect(result.getResponseSummaryMessage()).to.equal('Called Name of the check check.  Response code 200.  Response time 20ms.');

  });

});
