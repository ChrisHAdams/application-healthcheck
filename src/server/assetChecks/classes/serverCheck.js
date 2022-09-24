//const ping = require('ping');
import ping from 'ping';

async function makeServerRequest(requestObj, log) {

  const start = Date.now();

  try {

    if(requestObj.url.length == 0){
      throw new Error('No URL');
    }

    const response = await ping.promise.probe(requestObj.url, { timeout: 2.5 });
    const end = Date.now() - start;
    const status = response.alive ? 200 : 500;

    if (status === 200) {
      log.info(`    Called ${requestObj.name}.  Response Code : ${status}.  Response Time : ${response.max}.`);
      requestObj.setActualResponseCode(status);
      requestObj.setActualResponseTime(parseFloat(response.max));
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

    requestObj.setActualResponseCode(error.message);
    requestObj.setActualResponseTime(0);

    log.error(`Error - ${requestObj.getResponseSummaryMessage()}`);

    return requestObj;
  }

}

export { makeServerRequest };
