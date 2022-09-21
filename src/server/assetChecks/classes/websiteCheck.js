const rp = require('request-promise');

async function makeHttpRequest(requestObj, log) {

  const options = {
    uri: requestObj.url,
    resolveWithFullResponse: true,
    timeout: 10000,
  };

  const start = Date.now();

  try {
    log.info(`Running Website check ${requestObj.name}.`);

    const responseObject = await rp(options);
    const end = Date.now() - start;

    requestObj.setActualResponseCode(responseObject.statusCode);
    requestObj.setActualResponseTime(end);
    requestObj.setTimestamp(Date.now());

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

module.exports = { makeHttpRequest };
