import {
  GetComponentCheckById,
  GetComponentCheckByName,
  GetComponentCheckByType,
  GetComponentCheckByIdJsonString,
  GetComponentCheckByNameJsonString,
} from '../getComponentCheck';

const { expect } = require('chai');

const healthCheckItems =
  [
    {
      key: 0,
      name: 'Name of the check 0',
      description: 'The description of check 0',
      checkType: 'website',
      expectedResponseCode: 200,
      expectedResponseTime: 500,
      url: 'some url',
      resolveWithFullResponse: true,
    },
    {
      key: 1,
      name: 'Name of the check 1',
      description: 'The description of the check 1',
      checkType: 'website',
      expectedResponseCode: 200,
      expectedResponseTime: 500,
      url: 'some url',
      resolveWithFullResponse: true,
    },
    {
      key: 3,
      name: 'Name of the check 3',
      description: 'The description of the check 3',
      checkType: 'webservice',
      expectedResponseCode: 200,
      expectedResponseTime: 500,
      url: 'some url',
      resolveWithFullResponse: true,
    },
  ];

describe('#GetComponentCheckById', function () {

  it('should return an healthcheck item by id', function () {

    let returnedHealthCheck = GetComponentCheckById(healthCheckItems, 0);
    expect(returnedHealthCheck.key).to.equal(0);

    returnedHealthCheck = GetComponentCheckById(healthCheckItems, 1);
    expect(returnedHealthCheck.key).to.equal(1);

  });

  it('should return an empty object where no healthcheck items found by id', function () {

    const returnedHealthCheck = GetComponentCheckById(healthCheckItems, 1000);

    expect(returnedHealthCheck).to.eql({});

  });

});

describe('#GetComponentCheckByIdJsonString', function () {

  it('should return an healthcheck item as JSON String by id', function () {

    let returnedHealthCheck = GetComponentCheckByIdJsonString(healthCheckItems, 0);
    expect(returnedHealthCheck).to.contain('"key":0');

    returnedHealthCheck = GetComponentCheckByIdJsonString(healthCheckItems, 1);
    expect(returnedHealthCheck).to.contain('"key":1');

  });

  it('should return an empty object where no healthcheck items found by id', function () {

    const returnedHealthCheck = GetComponentCheckByIdJsonString(healthCheckItems, 1000);

    expect(returnedHealthCheck).to.eql('{}');

  });

});

describe('#GetComponentCheckByNameJsonString', function () {

  it('should return an healthcheck item by name', function () {

    let returnedHealthCheck = GetComponentCheckByName(healthCheckItems, 'Name of the check 0');
    expect(returnedHealthCheck.key).to.equal(0);
    expect(returnedHealthCheck.name).to.equal('Name of the check 0');

    returnedHealthCheck = GetComponentCheckByName(healthCheckItems, 'Name of the check 1');
    expect(returnedHealthCheck.key).to.equal(1);
    expect(returnedHealthCheck.name).to.equal('Name of the check 1');

  });

  it('should return an empty object where no healthcheck items found by id', function () {

    const returnedHealthCheck = GetComponentCheckByName(healthCheckItems, 'Name of the check 1000');

    expect(returnedHealthCheck).to.eql({});

  });

});

describe('#GetComponentCheckByAsJsonStrong', function () {

  it('should return an healthcheck item as Json string by name', function () {

    let returnedHealthCheck = GetComponentCheckByNameJsonString(healthCheckItems, 'Name of the check 0');
    expect(returnedHealthCheck).to.contain('"key":0');
    expect(returnedHealthCheck).to.contain('"name":"Name of the check 0"');


    returnedHealthCheck = GetComponentCheckByNameJsonString(healthCheckItems, 'Name of the check 1');
    expect(returnedHealthCheck).to.contain('"key":1');
    expect(returnedHealthCheck).to.contain('"name":"Name of the check 1"');

  });

  it('should return an empty object where no healthcheck items found by id', function () {

    const returnedHealthCheck = GetComponentCheckByNameJsonString(healthCheckItems, 'Name of the check 1000');

    expect(returnedHealthCheck).to.eql('{}');

  });

});

describe('#GetComponentChecksByType', function () {

  it('should return an an array of healthcheck items by type', function () {

    let returnedHealthChecks = GetComponentCheckByType(healthCheckItems, 'website');
    expect(returnedHealthChecks.length).to.equal(2);
    expect(returnedHealthChecks[0].key).to.equal(0);
    expect(returnedHealthChecks[0].name).to.equal('Name of the check 0');

    returnedHealthChecks = GetComponentCheckByType(healthCheckItems, 'webservice');
    expect(returnedHealthChecks.length).to.equal(1);
    expect(returnedHealthChecks[0].key).to.equal(3);
    expect(returnedHealthChecks[0].name).to.equal('Name of the check 3');

  });

  it('should return an empty object where no healthcheck items found by type', function () {

    const returnedHealthCheck = GetComponentCheckByType(healthCheckItems, 'nonsense');

    expect(returnedHealthCheck).to.eql([]);

  });

});
