
import ComponentClassFactory from '../classes/componentClassFactory';
import WebsiteComponentClass from '../classes/websiteComponentClass';
import WebServiceComponentClass from '../classes/webServiceComponentClass';
import ServerComponentClass from '../classes/serverComponentClass';
import { GetComponentCheckById, GetComponentCheckByName } from '../actions/getComponentCheck';
import { makeHttpRequest } from '../checks/websiteCheck';
import { makeWebServiceRequest } from '../checks/webServiceCheck';
import { makeServerRequest } from '../checks/serverCheck';

import logger from '../common/logger';
import resultsLogger from '../common/resultsLogger';

async function runSingleCheck(checkToRun, log = logger) {

  let response = {};

  try {

    if (String(checkToRun.type).valueOf() === String('website').valueOf()) {
      const websiteComponent = new WebsiteComponentClass(checkToRun);
      response = await makeHttpRequest(websiteComponent, log);
    } else if (checkToRun.type === 'webservice') {
      const webServiceComponent = new WebServiceComponentClass(checkToRun);
      response = await makeWebServiceRequest(webServiceComponent, log);
    } else if (checkToRun.type === 'server') {
      const serverComponent = new ServerComponentClass(checkToRun);
      response = await makeServerRequest(serverComponent, log);
    }

    return response.toJson();

  } catch (error) {
    log.error(error);
    return error;
  }

}

async function runAllComponentChecks(items, log = logger) {

  try {
    const componentArray = ComponentClassFactory.createComponentList(items);

    const promiseArray = componentArray.map(item => (runSingleCheck(item.toJson(), log)));
    const results = await Promise.all(promiseArray);
    resultsLogger.info(JSON.stringify(results));

    return results;

  } catch (error) {
    log.error(error);
    return error;
  }

}

async function runComponentCheckById(healthcheckItems, id, log = logger) {

  const checkToRun = GetComponentCheckById(healthcheckItems, id);
  let response = {};

  if (checkToRun) {
    response = await runSingleCheck(checkToRun, log);
  }

  return response;

}

async function runComponentCheckByName(healthcheckItems, name, log = logger) {

  const checkToRun = GetComponentCheckByName(healthcheckItems, name);
  let response = {};

  if (checkToRun) {
    response = await runSingleCheck(checkToRun, log);
  }

  return response;

}

module.exports = {
  runSingleCheck,
  runComponentCheckById,
  runComponentCheckByName,
  runAllComponentChecks,
};
