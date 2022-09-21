import { runSingleCheck,
         runAssetCheckByIdFromArray,
         runAssetCheckById,
         runAssetCheckByNameFromArray,
         runAssetCheckByName,
         runAllAssetChecks,
         runAllAssetChecksFromArray } from '../actions/runAssetChecks';

import WebsiteAssetClass from '../../assets/classes/websiteAsset';
import WebServiceAssetClass from '../../assets/classes/webServiceAsset';
import ServerAssetClass from '../../assets/classes/serverAsset';

const MockLogger = require('../../mocks/mockLogger');

var log;

const validWebsiteAssetObject = {
  key: 0,
  name: 'BBC',
  description: 'Ping the BBC website',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 1000,
  url: 'http://www.bbc.co.uk',
  resolveWithFullResponse: true,
};

const invalidWebsiteAssetObject = {
  key: 0,
  name: 'BBC',
  description: 'Ping the BBC website',
  checkType: 'website',
  expectedResponseCode: 200,
  expectedResponseTime: 1000,
  url: 'shttp://www.bbc.couk',
  resolveWithFullResponse: true,
};

const validWebServiceAssetObject = {
  key:0,
  name: "Penguin",
  description: "Check Penguin Books API.",
  checkType: "webservice",
  url: "https://reststop.randomhouse.com/resources/authors/3446/",
  expectedResponseCode: 200,
  expectedResponseTime: 900
};

const validServerAssetObject = {
  key:7,
  name: "Local Server",
  description: "Local server",
  checkType: "server",
  url: "127.0.0.1",
  expectedResponseCode: 200,
  expectedResponseTime: 600
}

const assetArray = [
  {
    key: 0,
    name: 'BBC',
    description: 'Ping the BBC website',
    checkType: 'website',
    expectedResponseCode: 200,
    expectedResponseTime: 5000,
    url: 'http://www.bbc.co.uk',
    resolveWithFullResponse: true,
  },
  {
    key:1,
    name: "Penguin",
    description: "Check Penguin Books API.",
    checkType: "webservice",
    url: "https://reststop.randomhouse.com/resources/authors/3446/",
    expectedResponseCode: 200,
    expectedResponseTime: 900
  },
  {
    key:2,
    name: "Local Server",
    description: "Local server",
    checkType: "server",
    url: "127.0.0.1",
    expectedResponseCode: 200,
    expectedResponseTime: 600
  }
];

describe('#runAssetChecks', function () {

  beforeEach(function () {
    log = new MockLogger();
  });

  it('should be able to run a single website check using mock logger', async function () {

    const response = await runSingleCheck(new WebsiteAssetClass(validWebsiteAssetObject), log);

    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1500);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a single website check using default logger', async function () {

    const response = await runSingleCheck(new WebsiteAssetClass(validWebsiteAssetObject));

    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1500);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a single webservice check', async function () {

    const response = await runSingleCheck(new WebServiceAssetClass(validWebServiceAssetObject), log);

    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1500);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a single server check', async function () {

    const response = await runSingleCheck(new ServerAssetClass(validServerAssetObject), log);

    expect(response.getActualResponseCode()).toEqual(200);
    //expect(response.getActualResponseTime()).toBeLessThan(700);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should throw an error when the specified check is invalid', async function () {

    const response = await runSingleCheck(new ServerAssetClass(invalidWebsiteAssetObject), log);

    expect(response.getActualResponseCode()).toEqual('Error: Invalid protocol: shttp:');
    //expect(response.getActualResponseTime()).toBeLessThan(700);

  });

  it('should be able to run a check by id from an array using mock logger', async function () {

    const response = await runAssetCheckByIdFromArray(assetArray, 0, log);

    expect(response.getKey()).toEqual(0);
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1000);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by id from an array using default log', async function () {

    const response = await runAssetCheckByIdFromArray(assetArray, 0);

    expect(response.getKey()).toEqual(0);
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1000);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by id from assets in config using mock logger', async function () {

    const response = await runAssetCheckById(0, log);

    expect(response.getKey()).toEqual(0);
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(response.getExpectedResponseTime());
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by id from assets in config using default logger', async function () {

    const response = await runAssetCheckById(0);

    expect(response.getKey()).toEqual(0);
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(response.getExpectedResponseTime());
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by name from an array using mock logger', async function () {

    const response = await runAssetCheckByNameFromArray(assetArray, "BBC", log);

    expect(response.getKey()).toEqual(0);
    expect(response.getName()).toEqual('BBC');
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1000);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by name from an array using default log', async function () {

    const response = await runAssetCheckByNameFromArray(assetArray, "BBC");

    expect(response.getKey()).toEqual(0);
    expect(response.getName()).toEqual('BBC');
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1000);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by name from assets in config and use default log', async function () {

    const response = await runAssetCheckByName("Sky Website");

    expect(response.getKey()).toEqual(2);
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1000);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run a check by name from assets in config and use mock log', async function () {

    const response = await runAssetCheckByName("Sky Website", log);

    expect(response.getKey()).toEqual(2);
    expect(response.getActualResponseCode()).toEqual(200);
    expect(response.getActualResponseTime()).toBeLessThan(1000);
    expect(response.checkResponseTimeResult()).toEqual('Pass');
    expect(response.checkResponseCodeResult()).toEqual('Pass');

  });

  it('should be able to run all checks from an array using mock logger', async function () {

    const response = await runAllAssetChecksFromArray(assetArray, log);

    expect(response.length).toEqual(3);
    expect(response[0].getName()).toEqual('BBC');
    expect(response[0].getActualResponseTime()).toBeLessThan(response[0].getExpectedResponseTime());
    expect(response[0].getActualResponseCode()).toEqual(response[0].getExpectedResponseCode());

    expect(response[1].getName()).toEqual('Penguin');
    expect(response[1].getActualResponseTime()).toBeLessThan(response[1].getExpectedResponseTime());
    expect(response[1].getActualResponseCode()).toEqual(response[1].getExpectedResponseCode());

    expect(response[2].getName()).toEqual('Local Server');
    expect(response[2].getActualResponseTime()).toBeLessThan(response[2].getExpectedResponseTime());
    expect(response[2].getActualResponseCode()).toEqual(response[2].getExpectedResponseCode());

  });

  it('should be able to run all checks from an array using default log', async function () {

    const response = await runAllAssetChecksFromArray(assetArray);

    expect(response.length).toEqual(3);
    expect(response[0].getName()).toEqual('BBC');
    expect(response[0].getActualResponseTime()).toBeLessThan(response[0].getExpectedResponseTime());
    expect(response[0].getActualResponseCode()).toEqual(response[0].getExpectedResponseCode());

    expect(response[1].getName()).toEqual('Penguin');
    expect(response[1].getActualResponseTime()).toBeLessThan(response[1].getExpectedResponseTime());
    expect(response[1].getActualResponseCode()).toEqual(response[1].getExpectedResponseCode());

    expect(response[2].getName()).toEqual('Local Server');
    expect(response[2].getActualResponseTime()).toBeLessThan(response[2].getExpectedResponseTime());
    expect(response[2].getActualResponseCode()).toEqual(response[2].getExpectedResponseCode());

  });

  it('should be able to run all checks from config using mock logger', async function () {

    const response = await runAllAssetChecks(log);

    expect(response.length).toEqual(8);

    expect(response[0].getName()).toEqual('BBC');

    expect(response[6].getName()).toEqual('Penguin');
    expect(response[6].getActualResponseTime()).toBeLessThan(response[6].getExpectedResponseTime());
    expect(response[6].getActualResponseCode()).toEqual(response[6].getExpectedResponseCode());

    expect(response[5].getName()).toEqual('Google Website');
    expect(response[5].getActualResponseTime()).toBeLessThan(response[5].getExpectedResponseTime());
    expect(response[5].getActualResponseCode()).toEqual(response[5].getExpectedResponseCode());
  });

  it('should be able to run all checks from config using default log', async function () {

    const response = await runAllAssetChecks(log);

    expect(response.length).toEqual(8);

    expect(response[0].getName()).toEqual('BBC');

    expect(response[6].getName()).toEqual('Penguin');
    expect(response[6].getActualResponseTime()).toBeLessThan(response[6].getExpectedResponseTime());
    expect(response[6].getActualResponseCode()).toEqual(response[6].getExpectedResponseCode());

    expect(response[5].getName()).toEqual('Google Website');
    expect(response[5].getActualResponseTime()).toBeLessThan(response[5].getExpectedResponseTime());
    expect(response[5].getActualResponseCode()).toEqual(response[5].getExpectedResponseCode());
  });

});