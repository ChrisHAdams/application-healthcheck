
import AssetFactory from '../../assets/classes/assetFactory';
import WebsiteAssetClass from '../../assets/classes/websiteAsset';
import WebServiceAssetClass from '../../assets/classes/webServiceAsset';
import ServerAssetClass from '../../assets/classes/serverAsset';
import Config from 'config';
import { getAssetByIdFromArray, getAssetByNameFromArray } from '../../assets/actions/getAssets';
import { makeHttpRequest } from '../classes/websiteCheck';
import { makeWebServiceRequest } from '../classes/webServiceCheck';
import { makeServerRequest } from '../classes/serverCheck';

import logger from '../../common/logger';
import resultsLogger from '../../common/resultsLogger';

async function runSingleCheck(checkToRun, log = logger) {

  let response = {};

  if (checkToRun.getCheckType() === 'website') {

    const websiteAsset = new WebsiteAssetClass(checkToRun);
    response = await makeHttpRequest(websiteAsset, log);

  } else if (checkToRun.getCheckType() === 'webservice') {

    const webServiceAsset = new WebServiceAssetClass(checkToRun);
    response = await makeWebServiceRequest(webServiceAsset, log);

  } else if (checkToRun.getCheckType() === 'server') {

    const serverAsset = new ServerAssetClass(checkToRun);
    response = await makeServerRequest(serverAsset, log);

  }

  return response;

}

async function runAllAssetChecks(log = logger) {

  return await runAllAssetChecksFromArray(Config.get('healthcheck.items'), log);

}

async function runAllAssetChecksFromArray(items, log = logger) {

  const AssetArray = AssetFactory.createAssetList(items);

  const promiseArray = AssetArray.map(item => (runSingleCheck(item, log)));
  const results = await Promise.all(promiseArray);

  let returnArray = [];

  results.forEach(element => returnArray.push(element.toJson()));

  const time = Date.now();

  let obj = {
    timestamp: time,
    items: returnArray
  };

  resultsLogger.info(obj);

  //return results;
  return returnArray;

}

async function runAssetCheckById(id, log = logger) {

  let result = await runAssetCheckByIdFromArray(Config.get('healthcheck.items'), id, log);
  return result.toJson();
  //return await runAssetCheckByIdFromArray(Config.get('healthcheck.items'), id, log);

}

async function runAssetCheckByIdFromArray(healthcheckItems, id, log = logger) {

  return await runSingleCheck(getAssetByIdFromArray(healthcheckItems, id), log);

}

async function runAssetCheckByName(name, log = logger) {

  return await runAssetCheckByNameFromArray(Config.get('healthcheck.items'), name, log);

}

async function runAssetCheckByNameFromArray(healthcheckItems, name, log = logger) {

  return await runSingleCheck(getAssetByNameFromArray(healthcheckItems, name), log);

}

module.exports = {
  runSingleCheck,
  runAssetCheckById,
  runAssetCheckByName,
  runAllAssetChecks,
  runAssetCheckByIdFromArray,
  runAssetCheckByNameFromArray,
  runAllAssetChecksFromArray
};
