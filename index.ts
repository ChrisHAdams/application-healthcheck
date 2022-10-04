//import WebServer from './src/server/app.ts';
//import Log from './src/server/common/logger.js';

const Log = require('./src/server/common/logger.ts');
const WebServer = require('./src/server/app');

const webServer = new WebServer(Log);

async function startup() {

  Log.info('Starting application');

  try {
    Log.info('Initializing web server module');

    webServer.init();

    await webServer.start();

  } catch (err) {
    Log.error(err.toString());

    process.exit(1); // Non-zero failure code
  }
}

startup();


process.on('SIGTERM', function () {

  webServer.shutdown().then(function () {
    Log.info("SIGTERM Received.  Shutting down.")
    process.exit(0);
  });

});
