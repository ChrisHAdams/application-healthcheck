
import AssetFactory from '../../assets/classes/assetFactory.js';
import WebsiteAssetClass from '../../assets/classes/websiteAsset.js';
import WebServiceAssetClass from '../../assets/classes/webServiceAsset.js';
import ServerAssetClass from '../../assets/classes/serverAsset.js';
import Config from 'config';
import { getAssetByIdFromArray, getAssetByNameFromArray } from '../../assets/actions/getAssets.js';
import { makeHttpRequest } from '../classes/websiteCheck.js';
import { makeWebServiceRequest } from '../classes/webServiceCheck.js';
import { makeServerRequest } from '../classes/serverCheck.js';

import logger from '../../common/logger.js';
import resultsLogger from '../../common/resultsLogger.js';

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

export {
  runSingleCheck,
  runAssetCheckById,
  runAssetCheckByName,
  runAllAssetChecks,
  runAssetCheckByIdFromArray,
  runAssetCheckByNameFromArray,
  runAllAssetChecksFromArray
};
