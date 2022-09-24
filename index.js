import WebServer from './src/server/app.js';
import Log from './src/server/common/logger.js';

const webServer = new WebServer();

async function startup() {

  Log.info('Starting application');

  try {
    Log.info('Initializing web server module');

    webServer.init(Log);

    await webServer.start(Log);

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
