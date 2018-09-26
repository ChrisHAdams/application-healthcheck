const ping = require('ping');

async function makeServerRequest(requestObj, log) {

  const start = Date.now();

  try {

    const response = await ping.promise.probe(requestObj.url, { timeout: 2.5 });
    const end = Date.now() - start;
    const status = response.alive ? 200 : 500;

    if (status === 200) {
      log.info(`    Called ${requestObj.name}.  Response Code : ${status}.  Response Time : ${response.max}.`);
      requestObj.setActualResponseCode(status);
      requestObj.setActualResponseTime(response.max);
      requestObj.setTimestamp(Date.now());

    } else {
      log.info(`    Called ${requestObj.name}.  Response Code : ${status}.  Response Time : ${end}.`);
      requestObj.setActualResponseCode(status);
      requestObj.setActualResponseTime(end);
      requestObj.setTimestamp(Date.now());
    }

    log.info(requestObj.getResponseSummaryMessage());

    return requestObj;

  } catch (error) {

    const end = Date.now() - start;

    requestObj.setActualResponseCode(error.message);
    requestObj.setActualResponseTime(end);

    log.error(`Error - ${requestObj.getResponseSummaryMessage()}`);

    return requestObj;
  }

}

module.exports = { makeServerRequest };
