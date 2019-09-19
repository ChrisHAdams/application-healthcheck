import { expect } from 'chai';
import { runSingleCheck, runAllComponentChecks } from '../runComponentChecks';
import ComponentClassFactory from '../../classes/componentClassFactory';

const ValidWebsiteCheck = {
  key: 0,
  name: 'Valid check',
  description: 'The description',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'http://www.bbc.co.uk',
  resolveWithFullResponse: true,
};

const ValidServerCheck = {
  key: 1,
  name: 'Valid check',
  description: 'The description',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'http://www.google.co.uk',
  resolveWithFullResponse: true,
};

const InvalidServerCheck = {
  key: 1,
  name: 'Valid check',
  description: 'The description',
  checkType: 'nonsense-check',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: '192.168.0.28',
  resolveWithFullResponse: true,
};

const CheckArray = [ValidWebsiteCheck, ValidServerCheck];

describe('# runSingleCheck', function () {

  it('should run a single valid website component check', async function () {
    const checkObject = ComponentClassFactory.createComponentObject(ValidWebsiteCheck);
    const response = await runSingleCheck(checkObject.toJson());

    expect(response.actualResponseCode).to.equal(200);

  });

  it('should run a single valid server component check', async function () {

    const checkObject = ComponentClassFactory.createComponentObject(ValidServerCheck);
    const response = await runSingleCheck(checkObject.toJson());

    expect(response.actualResponseCode).to.equal(200);

  });

});

describe('# runAllComponentChecks', function () {

  it('should run all passed-in checks', async function () {

    const response = await runAllComponentChecks(CheckArray);

    expect(response[0].actualResponseCode).to.equal(200);
    expect(response[1].actualResponseCode).to.equal(200);
  });
/*
  it('should return error when error caught below for an invalid check', async function () {

    const response = await runAllComponentChecks([InvalidServerCheck]);
    expect(response.toString()).to.contain('TypeError: Cannot read property');

  });
*/
});
