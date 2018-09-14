const rp = require('request-promise');

async function makeWebServiceRequest(requestObj, log) {

  const options = {
    uri: requestObj.url,
    headers: requestObj.headers,
    timeout: 10000,
    resolveWithFullResponse: true,
    method: requestObj.method,
    body: requestObj.payload,
  };

  const start = Date.now();

  try {

    log.info(`Running WebService check ${requestObj.name}.`);
    const responseObject = await rp(options);
    const end = Date.now() - start;

    requestObj.setActualResponseCode(responseObject.statusCode);
    requestObj.setActualResponseTime(end);

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

module.exports = { makeWebServiceRequest };
