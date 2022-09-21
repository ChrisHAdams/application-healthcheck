async function makeValidHttpRequest(requestObj, log) {

  const options = {
    uri: requestObj.url,
    resolveWithFullResponse: true,
  };

  const start = Date.now();
  const responseObject = { statusCode: 200 };
  const end = Date.now() - start;

  requestObj.setActualResponseCode(responseObject.statusCode);
  requestObj.setActualResponseTime(end);

  log.info(`Called ${options.uri}.  Response code ${responseObject.statusCode}.  Response time ${end}ms.`);

  return requestObj;

}

async function makePageNotFoundHttpRequest(requestObj, log) {

  const options = {
    uri: requestObj.url,
    resolveWithFullResponse: true,
  };

  const start = Date.now();
  const responseObject = { statusCode: 404 };
  const end = Date.now() - start;

  requestObj.setActualResponseCode(responseObject.statusCode);
  requestObj.setActualResponseTime(end);

  log.info(`Called ${options.uri}.  Response code ${responseObject.statusCode}.  Response time ${end}ms.`);

  return requestObj;

}

async function makeServerErrorHttpRequest(requestObj, log) {

  const options = {
    uri: requestObj.url,
    resolveWithFullResponse: true,
  };

  const start = Date.now();
  const responseObject = { statusCode: 500 };
  const end = Date.now() - start;

  requestObj.setActualResponseCode(responseObject.statusCode);
  requestObj.setActualResponseTime(end);

  log.info(`Called ${options.uri}.  Response code ${responseObject.statusCode}.  Response time ${end}ms.`);

  return requestObj;

}

module.exports = { makeValidHttpRequest, makePageNotFoundHttpRequest, makeServerErrorHttpRequest };
