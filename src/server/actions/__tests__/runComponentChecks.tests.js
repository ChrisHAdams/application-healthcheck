import { expect } from 'chai';
import { runSingleCheck } from '../runComponentChecks';

const validCheck = {
  key: 0,
  name: 'Valid check',
  description: 'The description',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 500,
  url: 'www.bbc.co.uk',
  resolveWithFullResponse: true,
};

describe('# runSingleCheck', function () {

  it('should run a single valid component check', async function () {

    expect(App.getState()).to.equal('Started');
  });

});
