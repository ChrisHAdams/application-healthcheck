import ListChecks from '../listComponentChecks';

const { expect } = require('chai');

const healthCheckItems =
  [
    {
      key: 0,
      name: 'Name of the check',
      description: 'The description',
      checkType: 'website',
      expectedResponseCode: 200,
      expectedResponseTime: 500,
      url: 'some url',
      resolveWithFullResponse: true,
    },
    {
      key: 1,
      name: 'Name of the check',
      description: 'The description',
      checkType: 'website',
      expectedResponseCode: 200,
      expectedResponseTime: 500,
      url: 'some url',
      resolveWithFullResponse: true,
    },
    {
      key: 3,
      name: 'Name of the check',
      description: 'The description',
      checkType: 'webservice',
      expectedResponseCode: 200,
      expectedResponseTime: 500,
      url: 'some url',
      resolveWithFullResponse: true,
    },
  ];


describe('#ListChecks', function () {

  it('should return a list of the healthcheck items', function () {

    const listArray = JSON.parse(ListChecks(healthCheckItems));

    expect(listArray.length).to.equal(3);

  });
});
