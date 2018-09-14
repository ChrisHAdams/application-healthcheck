import WebServer from './src/server/app';
import Log from './src/server/common/logger';

async function startup() {

  Log.info('Starting application');

  try {
    Log.info('Initializing web server module');

    await WebServer.start(Log);

  } catch (err) {
    Log.error(err.message);

    process.exit(1); // Non-zero failure code
  }
}

startup();


process.on('SIGTERM', function () {

  WebServer.shutdown().then(function () {
    process.exit(0);
  });

});
