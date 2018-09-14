const application = require('./src/app.js');
const logger = require('./src/common/logger.js');

async function startup() {
  logger.info('Starting application');

  try {
    logger.info('Initializing web server module');

    await application.initialize();

  } catch (err) {
    logger.error(err);

    process.exit(1); // Non-zero failure code
  }
}

startup();
