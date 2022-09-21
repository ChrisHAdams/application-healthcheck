async function makeValidServerCall(requestObj, log) {

  const responseCode = 200;
  const responseTime = 10;

  log.info(`    Called ${requestObj.name}.  Response Code : ${responseCode}.  Response Time : ${responseTime}.`);

  requestObj.setActualResponseCode(responseCode);
  requestObj.setActualResponseTime(responseTime);
  requestObj.setTimestamp(Date.now());

  return requestObj;

}

async function makeInvalidServerCall(requestObj, log) {

  const responseCode = 500;
  const responseTime = 100;

  log.info(`    Called ${requestObj.name}.  Response Code : ${responseCode}.  Response Time : ${responseTime}.`);

  requestObj.setActualResponseCode(responseCode);
  requestObj.setActualResponseTime(responseTime);
  requestObj.setTimestamp(Date.now());

  return requestObj;

}

module.exports = { makeValidServerCall, makeInvalidServerCall };