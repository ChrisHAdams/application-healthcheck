const rp = require('request-promise');

async function makeOldWebServiceRequest(requestObj, log) {

  const options = {
    uri: requestObj.url,
    headers: requestObj.headers,
    timeout: 10000,
    resolveWithFullResponse: true,
    method: requestObj.method,
    body: requestObj.payload,
  };

  const start = Date.now();

  const responseObject = await rp(options)
    .then(function (response) {
      const end = Date.now() - start;
      log.info(`    Called ${requestObj.name}.  Response Code : ${response.statusCode}.  Response Time : ${end}ms.`);
      const responseObj = JSON.parse(`{"responseCode": ${response.statusCode}, "responseTime": ${end}}`);
      return responseObj;
    })
    .catch(function (error) {
      const end = Date.now() - start;
      let responseObj = {};
      if (error.response) {
        log.info(`    Called ${requestObj.name}.  Response Code : ${error.statusCode}.  Response Message ${error.response.statusMessage}.  Response Time : ${end}ms.`);
        responseObj = JSON.parse(`{"responseCode": ${error.statusCode}, "responseMessage": "${error.response.statusMessage}", "responseTime": ${end}}`);
      } else {
        log.info(`    Called ${requestObj.name}.  Response Code : 500.  Response Message N/A - Monitor timeout reached.  Response Time : ${end}ms.`);
        responseObj = JSON.parse(`{"responseCode": 500, "responseMessage": "Monitor timeout reached", "responseTime": ${end}}`);
      }
      return responseObj;
    });

  return responseObject;
}

module.exports = { makeOldWebServiceRequest };
